using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Repository.Models;
using System;


namespace Repository.DBContext
{
    public partial class MigrationDbContext : DbContext
    {

        public MigrationDbContext()
        {
        }

        public MigrationDbContext(DbContextOptions<MigrationDbContext> options)
                 : base(options)
        {
        }

        public virtual DbSet<Status> Status { get; set; }
        public virtual DbSet<Request> Requests { get; set; }

        public virtual DbSet<Person> Persons { get; set; }

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
}
