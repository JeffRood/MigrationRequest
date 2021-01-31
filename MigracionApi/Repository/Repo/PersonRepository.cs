using Repository.DBContext;
using Repository.Interfaz;
using Repository.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Repo
{
    public sealed class PersonRepository: GenericRepository<Person>, IPersonRepository
    {
        private readonly TestDbContext _TestDbContext;

        public PersonRepository(TestDbContext TestDbContext) : base(TestDbContext)
      => _TestDbContext = TestDbContext;
    }
}
