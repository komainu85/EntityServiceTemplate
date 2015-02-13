using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Mike.Robbins.EntityServiceEmptyProject.Models;
using Mike.Robbins.EntityServiceEmptyProject.Repositories;
using Sitecore.Services.Core;
using Sitecore.Services.Infrastructure.Sitecore.Services;

namespace Mike.Robbins.EntityServiceEmptyProject.Controllers
{
    [ServicesController]
    public class EntityController : EntityService<Entity>
    {
        public EntityController(IRepository<Entity> repository) : base(repository)
        {
        }

        public EntityController()
            : this(new EntityRespository())
        {
        }
    }
}