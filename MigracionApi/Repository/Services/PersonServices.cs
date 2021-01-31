using Repository.Interfaz;
using Repository.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Services
{
    public sealed class PersonServices
    {
        private readonly IPersonRepository _PersonDB;

            public PersonServices(IPersonRepository Person)
            {
                _PersonDB = Person;
            }
        public IResultadoOperaciones<Person> Create(Person entity)
        {            
            IResultadoOperaciones<Person> result = _PersonDB.Create(entity);
            if (result == null)
            {
                return BasicOperationResult<Person>.Fail(result.Message);
            }
            return result;

        }

        public IEnumerable<Person> GetAll()
        {
            IEnumerable<Person> result = _PersonDB.Get();
            return result;
        }

        public IResultadoOperaciones<Person> Remove(int Id)
        {
            Person PersonDeleted = _PersonDB.Find(ps => ps.Id == Id);

            if (PersonDeleted != null)
            {
            IResultadoOperaciones<Person> deleted = _PersonDB.Delete(PersonDeleted, "Persona eliminado Correctamente");
            return deleted;

            }
            return null;

        }

        public IResultadoOperaciones<Person> Update(Person entity)
        {
            IResultadoOperaciones<Person> Updated = _PersonDB.Update(entity, "Persona Actualizado Correctamente");
            return Updated;

        }
    }
}
