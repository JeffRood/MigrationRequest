using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Models
{
    public partial class Request
    {
        public int Id { get; set; }
        public int personId { get; set; }
        public int statusId { get; set; }
        public DateTime creationDate { get; set; }

        public virtual Person Person { get; set; }
        public virtual Status Status { get; set; }
    }
}
