using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Models
{
    public partial class Status
    {
        public int Id { get; set; }
        public string statusDescription { get; set; }
        public virtual ICollection<Request> Request { get; set; }

    }
}
