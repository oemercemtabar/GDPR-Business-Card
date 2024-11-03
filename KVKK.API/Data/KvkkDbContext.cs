using KVKK.API.Models;
using Microsoft.EntityFrameworkCore;

namespace KVKK.API.Data
{

    public class KvkkDbContext : DbContext
    {
        private const string _connectionString = "server=DESKTOP-NGUK6M4\\SQLEXPRESS; database=KVVKKartvizitDb; integrated security=true;";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
        /*
        public KvkkDbContext(DbContextOptions<KvkkDbContext> options)
            :base(options)
        {
            Database.Migrate();
        }
        */
        public DbSet<KULLANICI> KULLANICI { get; set; }

        public DbSet<ROL> ROL { get; set; }

        public DbSet<KURUM> KURUM { get; set; }

        public DbSet<BIRIM> BIRIM { get; set; }

        public DbSet<KARTVIZIT> KARTVIZIT { get; set; }

        public DbSet<PAYLASIM> PAYLASIM { get; set; }
    }
}
