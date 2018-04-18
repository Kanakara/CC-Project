using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using finalproject_core.Models;

namespace finalproject_core.Data
{
   
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        //data tables 
        
        public DbSet<TeamMembers> TeamMembers { get; set; }
        public DbSet<ContactForm> ContactForm { get; set; }
        
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}