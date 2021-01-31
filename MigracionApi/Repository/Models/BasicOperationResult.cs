using Repository.Interfaz;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Models
{
    public class BasicOperationResult<T> : IResultadoOperaciones<T>
    {
        BasicOperationResult(string message, bool success, T entity)
        {
            Message = message;
            Success = success;
            Entity = entity;
        }

        public new string Message { get; }

        public new bool Success { get; }

        public new T Entity { get; }

        public static BasicOperationResult<T> Ok(string Mensaje)
            => new BasicOperationResult<T>(Mensaje, true, default(T));

        public static BasicOperationResult<T> Ok(T entity)
            => new BasicOperationResult<T>("", true, entity);

        public static BasicOperationResult<T> Fail(string message)
            => new BasicOperationResult<T>(message, false, default(T));

    }
}
