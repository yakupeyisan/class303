#pragma checksum "C:\Aksam\SimpleMvcUI\WebCoreMvc\Views\Products\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "015b5090a0d1e8bb3486f5ca87274cf8da0f92bd"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Products_Index), @"mvc.1.0.view", @"/Views/Products/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Aksam\SimpleMvcUI\WebCoreMvc\Views\_ViewImports.cshtml"
using WebCoreMvc;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Aksam\SimpleMvcUI\WebCoreMvc\Views\_ViewImports.cshtml"
using WebCoreMvc.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"015b5090a0d1e8bb3486f5ca87274cf8da0f92bd", @"/Views/Products/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"bf1236572e05da2a900643a3ba701b3694550147", @"/Views/_ViewImports.cshtml")]
    public class Views_Products_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Aksam\SimpleMvcUI\WebCoreMvc\Views\Products\Index.cshtml"
  
    ViewData["Title"] = "Users Page";

#line default
#line hidden
#nullable disable
            WriteLiteral("<a href=\"/Products/Add\" class=\"btn btn-sm btn-primary\">+</a>\r\n<div class=\"row row-cols-1 row-cols-md-3 g-4\">\r\n");
#nullable restore
#line 6 "C:\Aksam\SimpleMvcUI\WebCoreMvc\Views\Products\Index.cshtml"
     foreach (ProductDto product in ViewBag.products)
    {

#line default
#line hidden
#nullable disable
            WriteLiteral("    <div class=\"col-md-4 col-sm-12\">\r\n        <div class=\"card h-100\">\r\n            <img");
            BeginWriteAttribute("src", " src=\"", 306, "\"", 329, 1);
#nullable restore
#line 10 "C:\Aksam\SimpleMvcUI\WebCoreMvc\Views\Products\Index.cshtml"
WriteAttributeValue("", 312, product.ImageUrl, 312, 17, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"card-img-top\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">");
#nullable restore
#line 12 "C:\Aksam\SimpleMvcUI\WebCoreMvc\Views\Products\Index.cshtml"
                                  Write(product.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral(" <small class=\"badge badge-dark\">");
#nullable restore
#line 12 "C:\Aksam\SimpleMvcUI\WebCoreMvc\Views\Products\Index.cshtml"
                                                                                Write(product.CategoryName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</small></h5>\r\n                <p class=\"card-text\">");
#nullable restore
#line 13 "C:\Aksam\SimpleMvcUI\WebCoreMvc\Views\Products\Index.cshtml"
                                Write(product.Description.Substring(0, (product.Description.Length>110)?110: product.Description.Length));

#line default
#line hidden
#nullable disable
            WriteLiteral("...</p>\r\n                <a class=\"btn btn-sm btn-danger float-right\"");
            BeginWriteAttribute("href", " href=\"", 717, "\"", 752, 2);
            WriteAttributeValue("", 724, "/Products/Delete/", 724, 17, true);
#nullable restore
#line 14 "C:\Aksam\SimpleMvcUI\WebCoreMvc\Views\Products\Index.cshtml"
WriteAttributeValue("", 741, product.Id, 741, 11, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral("><i class=\"fa-solid fa-trash\"></i></a>\r\n                <a class=\"btn btn-sm btn-warning float-right mr-1\"");
            BeginWriteAttribute("href", " href=\"", 859, "\"", 894, 2);
            WriteAttributeValue("", 866, "/Products/Update/", 866, 17, true);
#nullable restore
#line 15 "C:\Aksam\SimpleMvcUI\WebCoreMvc\Views\Products\Index.cshtml"
WriteAttributeValue("", 883, product.Id, 883, 11, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral("><i class=\"fa-solid fa-pencil\"></i></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
#nullable restore
#line 19 "C:\Aksam\SimpleMvcUI\WebCoreMvc\Views\Products\Index.cshtml"
    }

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
