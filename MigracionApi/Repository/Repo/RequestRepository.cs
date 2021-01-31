using Repository.DBContext;
using Repository.Interfaz;
using Repository.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Repo
{
    public sealed class RequestRepository : GenericRepository<Request>, IRequestRepository
    {
        private readonly TestDbContext _TestDbContext;

        public RequestRepository(TestDbContext TestDbContext) : base(TestDbContext)
     => _TestDbContext = TestDbContext;
    }
}
