using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Interfaz
{
   public interface IResultadoOperaciones <T>
    {
        public string Message { get; }
        public bool Success { get; }
        public T Entity { get; }
    }
}
