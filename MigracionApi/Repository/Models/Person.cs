using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Models
{
   public partial class Person
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string lastName { get; set; }
        public DateTime birthday { get; set; }

        public string passport { get; set; }
        public string address { get; set; }
        public string sex { get; set; }
        public string photo { get; set; }
                
        public virtual ICollection<Request> Request { get; set; }

    }
}
