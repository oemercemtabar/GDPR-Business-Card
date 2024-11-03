using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KVKK.API.Migrations
{
    public partial class MigrationFirst : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BIRIM",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    AD = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    KURUMID = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AKTIFMI = table.Column<bool>(type: "bit", nullable: true),
                    SILINDIMI = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BIRIM", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "KARTVIZIT",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    KURUMADI = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AD = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SOYAD = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UNVAN = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BIRIM = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ILCE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ADRES = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TELEFON = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EPOSTA = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FAX = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AKTIFMI = table.Column<bool>(type: "bit", nullable: true),
                    SILINDIMI = table.Column<bool>(type: "bit", nullable: true),
                    IZINVARMI = table.Column<bool>(type: "bit", nullable: true),
                    KURUMID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BIRIMID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    KULLANICIID = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KARTVIZIT", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "KULLANICI",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    AD = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SOYAD = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TELEFON = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EPOSTA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SIFRE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    KURUMID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ROLID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BIRIMID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AKTIFMI = table.Column<bool>(type: "bit", nullable: true),
                    SILINDIMI = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KULLANICI", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "KURUM",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ADI = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ILCE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ADRES = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AKTIFMI = table.Column<bool>(type: "bit", nullable: true),
                    SILINDIMI = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KURUM", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PAYLASIM",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PAYLASANKULLANICIID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PAYLASIMISTEYENKULLANICIID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    KARTVIZITID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PAYLASIMISTEKTARIH = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PAYLASIMSURE = table.Column<int>(type: "int", nullable: false),
                    AKTIFMI = table.Column<bool>(type: "bit", nullable: true),
                    BITTIMI = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PAYLASIM", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ROL",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    AD = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ISDEFAULT = table.Column<bool>(type: "bit", nullable: true),
                    ISSUPERADMIN = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ROL", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BIRIM");

            migrationBuilder.DropTable(
                name: "KARTVIZIT");

            migrationBuilder.DropTable(
                name: "KULLANICI");

            migrationBuilder.DropTable(
                name: "KURUM");

            migrationBuilder.DropTable(
                name: "PAYLASIM");

            migrationBuilder.DropTable(
                name: "ROL");
        }
    }
}
