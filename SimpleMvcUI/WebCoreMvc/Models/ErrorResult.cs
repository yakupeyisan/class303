using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebCoreMvc.Models
{
    public class ErrorResult
    {
        public int Id{ get; set; }
        public string Message{ get; set; }

        public ErrorResult(string message)
        {
            Message = message;
        }
        public ErrorResult(int id,string message)
        {
            Id = id;
            Message = message;
        }
    }
}
