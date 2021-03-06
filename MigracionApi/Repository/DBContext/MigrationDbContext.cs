﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;
using Repository.Models;
using System;
using System.IO;

namespace Repository.DBContext
{
    public partial class TestDbContext : DbContext
    {
     

        public TestDbContext(DbContextOptions<TestDbContext> options)
                 : base(options)
        {
        }
             


        public virtual DbSet<Person> Persons { get; set; }
        public virtual DbSet<Status> Status { get; set; }
        public virtual DbSet<Request> Requests { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DTIC-17;Database=MigrationDB;Trusted_Connection=True;");
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Status>(entity =>
            {
                entity.HasKey(e => e.Id);

                entity.Property(e => e.statusDescription)
                  .HasMaxLength(30)
                  .IsUnicode(false);
            });

            modelBuilder.Entity<Person>(entity =>
           {
               entity.HasKey(e => e.Id);

               entity.Property(e => e.name).HasMaxLength(30).IsUnicode(false);

               entity.Property(e => e.lastName).HasMaxLength(30).IsUnicode(false);

               entity.Property(e => e.birthday).HasColumnType("datetime");

               entity.Property(e => e.passport).HasMaxLength(30).IsUnicode(false);
               entity.Property(e => e.address).HasMaxLength(100).IsUnicode(false);
               entity.Property(e => e.sex).HasMaxLength(1).IsUnicode(false);
               entity.Property(e => e.photo).HasMaxLength(1000).IsUnicode(false);


           });

            modelBuilder.Entity<Request>(entity =>
            {
                entity.HasKey(e => e.Id);


                entity.HasOne(d => d.Person).WithMany(p => p.Request).HasForeignKey(d => d.personId);

                entity.HasOne(d => d.Status).WithMany(p => p.Request).HasForeignKey(d => d.statusId);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    }
    public class MyDbContextFactory : IDesignTimeDbContextFactory<TestDbContext>
    {

        TestDbContext IDesignTimeDbContextFactory<TestDbContext>.CreateDbContext(string[] args)
        {
           

            var builder = new DbContextOptionsBuilder<TestDbContext>();

            builder.UseSqlServer("Server=DTIC-17;Database=MigrationDB;Trusted_Connection=True;");

            return new TestDbContext(builder.Options);
        }
    }
}
