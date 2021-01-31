using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Repository.DBContext;
using Repository.Interfaz;
using Repository.Repo;
using Repository.Services;

namespace MigracionApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            services.AddDbContext<TestDbContext>
                (options => options.UseSqlServer(Configuration.GetConnectionString("MigrationDB"), b => b.MigrationsAssembly("Repository")));
            //services.AddDbContext<TestDbContext>(options =>
            //        options.UseSqlServer(Configuration.GetConnectionString("MigrationDB")));

            ConfigureRepositories(services);
            ConfigureServicio(services);
            //services.AddScoped<MenuServicio>();

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            });

            services.AddSwaggerGen(c => {
                c.SwaggerDoc("v1",
                 new Microsoft.OpenApi.Models.OpenApiInfo
                 {
                     Title = "Api Gestionador de Personas",
                     Version = "V1",
                     Description = "Esta api es de prueba para la direccion general de Migracion"
                 });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
         

            app.UseCors("CorsPolicy");
            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger(c =>
            {
                c.RouteTemplate = "api-docs/{documentName}/definition.json";
            });
            app.UseSwaggerUI(c =>
            {
                c.DocumentTitle = "Direccion General de Migracion";
                c.RoutePrefix = "help";
                c.SwaggerEndpoint("../api-docs/v1/definition.json", "Direccion General de Migracion");
                c.InjectStylesheet("../swagger-ui/custom.css");
            });
        }


        public void ConfigureRepositories(IServiceCollection services)
        {
            //services.AddTransient<IGeneric<T>, GenericRepository<T>();

            services.AddTransient<IPersonRepository, PersonRepository>();


        }

        public void ConfigureServicio(IServiceCollection services)
        {
            services.AddScoped<PersonServices>();
        }
    }
}
