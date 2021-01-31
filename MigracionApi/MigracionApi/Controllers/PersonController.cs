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
    public class PersonController : ControllerBase
    {
        private readonly PersonServices _PersonServices;

        public PersonController(PersonServices PersonServices)
        {
            _PersonServices = PersonServices;
        }


        //GET: /<controller>/
        [HttpGet("GetList")]
        public IEnumerable<Person> GetAll()
        {
            IEnumerable<Person> operationResult = _PersonServices.GetAll();
            return operationResult;
        }


        [HttpPost("Create")]
        public IResultadoOperaciones<Person> Create([FromBody] Person Person)
        {
            IResultadoOperaciones<Person> result = _PersonServices.Create(Person);

            if (result == null)
            {
                return BasicOperationResult<Person>.Fail(result.Message);
            }
            return result;
        }


        [HttpPost("Remove")]
        public IResultadoOperaciones<Person> Remove(int PersonId)
        {
            IResultadoOperaciones<Person> result = _PersonServices.Remove(PersonId);

            if (result == null)
            {
                return BasicOperationResult<Person>.Fail(result.Message);
            }
            return result;
        }

        [HttpPost("Update")]
        public IResultadoOperaciones<Person> Update(int PersonId)
        {
            Person PersonUpdate = _PersonServices.GetAll().ToList().Find(x => x.Id == PersonId);
            IResultadoOperaciones<Person> result = _PersonServices.Update(PersonUpdate);

            if (result == null)
            {
                return BasicOperationResult<Person>.Fail(result.Message);
            }
            return result;
        }

    }
}
