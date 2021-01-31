using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Repository.Interfaz
{
    public interface IGeneric<T>
    {
        IResultadoOperaciones<T> Create(T entity);

        IEnumerable<T> FindAll(Expression<Func<T, bool>> predicate);

        T Find(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includes);

        void Save();

        IResultadoOperaciones<T> Update(T entity, string Mensaje);


        IEnumerable<T> Get();

        IResultadoOperaciones<T> Delete(T entity, string Mensaje);

    }
}
