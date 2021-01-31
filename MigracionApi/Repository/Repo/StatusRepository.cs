using Repository.DBContext;
using Repository.Interfaz;
using Repository.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Repo
{
    public sealed class StatusRepository : GenericRepository<Status>, IStatusRepository
    {
        private readonly TestDbContext _TestDbContext;

        public StatusRepository(TestDbContext TestDbContext) : base(TestDbContext)
  => _TestDbContext = TestDbContext;
    }
}
