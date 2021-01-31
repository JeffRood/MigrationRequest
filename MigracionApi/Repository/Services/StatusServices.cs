using Repository.Interfaz;
using Repository.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Services
{
    public sealed class StatusServices
    {
        private readonly IStatusRepository _StatusDB;

        public StatusServices(IStatusRepository Status)
        {
            _StatusDB = Status;
        }

        public IEnumerable<Status> GetAll()
        {
            IEnumerable<Status> result = _StatusDB.Get();
            return result;
        }
    }
}
