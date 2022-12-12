using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;

namespace MultiLanguageAspNetCoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IStringLocalizer<HomeController> homeLocalizer;

        public HomeController(IStringLocalizer<HomeController> homeLocalizer)
        {
            this.homeLocalizer = homeLocalizer;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var title = homeLocalizer["Title"];
            var content = homeLocalizer["Content"];
            return Ok(new { Title = title.Value, Content = content.Value });
        }

    }
}
