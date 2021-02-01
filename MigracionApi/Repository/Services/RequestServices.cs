using Repository.Interfaz;
using Repository.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Services
{
    public sealed class RequestServices
    {

        private readonly IRequestRepository _requestDB;
        public RequestServices(IRequestRepository Request)
        {
            _requestDB = Request;
        }

        public IEnumerable<Request> GetAll()
        {
            IEnumerable<Request> result = _requestDB.Get();
            return result;
        }

        public IResultadoOperaciones<Request> Create(Request entity)
        {
            IResultadoOperaciones<Request> result = _requestDB.Create(entity);
           
            if (result == null)
            {
                return BasicOperationResult<Request>.Fail(result.Message);
            }
            return result;

        }

        public IResultadoOperaciones<Request> Remove(int Id)
        {
            Request RequestDeleted = _requestDB.Find(ps => ps.Id == Id);

            if (RequestDeleted != null)
            {
                IResultadoOperaciones<Request> deleted = _requestDB.Delete(RequestDeleted, "Solicitud eliminado Correctamente");
                return deleted;
            }
            return null;

        }

        public IResultadoOperaciones<Request> Update(Request entity)
        {
            IResultadoOperaciones<Request> Updated = _requestDB.Delete(entity, "Persona Actualizado Correctamente");
            return Updated;

        }
    }
}
