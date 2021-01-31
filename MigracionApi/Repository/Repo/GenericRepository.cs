using Microsoft.EntityFrameworkCore;
using Repository.DBContext;
using Repository.Interfaz;
using Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace Repository.Repo
{
    public class GenericRepository<T> : IGeneric<T> where T : class
    {
        private MigrationDbContext _context;
        private readonly DbSet<T> _set;

        public GenericRepository(MigrationDbContext DbContext)
        {
            _context = DbContext;
            _set = DbContext.Set<T>();
        }

        public IResultadoOperaciones<T> Create(T entity)
        {
            _context.Add(entity);
            _context.SaveChanges();
            return BasicOperationResult<T>.Ok(entity);
        }

        public IEnumerable<T> FindAll(Expression<Func<T, bool>> predicate) => _set.Where(predicate).ToList();

        public T Find(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> queryable = _set.AsQueryable();

            foreach (Expression<Func<T, object>> include in includes)
            {
                queryable = queryable.Include(include);
            }

            return queryable.FirstOrDefault(predicate);
        }

        public void Save()
            => _context.SaveChanges();

        public IResultadoOperaciones<T> Update(T entity, string Mensaje)
        {
            _context.Update(entity);
            _context.SaveChanges();
            return BasicOperationResult<T>.Ok(Mensaje);
        }

        public IEnumerable<T> Get() => _set.AsEnumerable();

        public IResultadoOperaciones<T> Delete(T entity, string Mensaje) 
        {
            _context.Remove(entity);
            _context.SaveChanges();
            return BasicOperationResult<T>.Ok(Mensaje);
        }
    }
}
