using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository.Interfaz;
using Repository.Models;
using Repository.Services;

namespace MigracionApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {

        private readonly RequestServices _RequestServices;
        public RequestController(RequestServices RequestServices)
        {
            _RequestServices = RequestServices;
        }

        //GET: /<controller>/
        [HttpGet("GetList")]
        public IEnumerable<Request> GetAll()
        {
            IEnumerable<Request> operationResult = _RequestServices.GetAll();
            
            return operationResult;
        }


        [HttpPost("Create")]
        public IResultadoOperaciones<Request> Create([FromBody] Request Request)
        {
            Request.statusId = 1;
            Request.creationDate = DateTime.Now;
            IResultadoOperaciones<Request> result = _RequestServices.Create(Request);

            if (result == null)
            {
                return BasicOperationResult<Request>.Fail(result.Message);
            }
            
            return result;
        }



        [HttpPost("Remove")]
        public IResultadoOperaciones<Request> Remove([FromQuery]int RequestId)
        {

            IResultadoOperaciones<Request> result = _RequestServices.Remove(RequestId);

            if (result == null)
            {
                return BasicOperationResult<Request>.Fail(result.Message);
            }
            return result;
        }

        [HttpPost("Update")]
        public IResultadoOperaciones<Request> Update(int RequestId)
        {
            Request RequestUpdate = _RequestServices.GetAll().ToList().Find(x => x.Id == RequestId);
            IResultadoOperaciones<Request> result = _RequestServices.Update(RequestUpdate);

            if (result == null)
            {
                return BasicOperationResult<Request>.Fail(result.Message);
            }
            return result;
        }
        

    }
}
