using System;
using System.Collections.Generic;
using System.IO;
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
        public IResultadoOperaciones<Person> Create([FromForm] Person Person)
        {            
            foreach (var item in HttpContext.Request.Form.Files)
            {
                var PathPhoto = Person.passport + Path.GetExtension(item.FileName);
                Person.photo = PathPhoto;
                IResultadoOperaciones<Person> result = _PersonServices.Create(Person);

                if (result == null)
                {
                    return BasicOperationResult<Person>.Fail(result.Message);
                }
                var filePath = "Documentos";

                if (item.Length > 0)
                {

                    using (var stream = new FileStream(Path.Combine(Environment.CurrentDirectory, filePath, PathPhoto), FileMode.Create))
                    {
                        item.CopyToAsync(stream);
                        stream.Close();
                    }
                }
                return result;
            }
            return BasicOperationResult<Person>.Fail("No estan todos los datos disponibles");
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
        public IResultadoOperaciones<Person> Update(Person Persons)
        {
           
           
            IResultadoOperaciones<Person> result = _PersonServices.Update(Persons);

            if (result == null)
            {
                return BasicOperationResult<Person>.Fail(result.Message);
            }
            return result;
        }

    }
}
