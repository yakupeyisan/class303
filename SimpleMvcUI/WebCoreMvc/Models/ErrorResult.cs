using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebCoreMvc.Models
{
    public class ErrorResult
    {
        public string Message{ get; set; }

        public ErrorResult(string message)
        {
            Message = message;
        }
    }
}
