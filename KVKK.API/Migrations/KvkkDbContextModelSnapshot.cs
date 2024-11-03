﻿// <auto-generated />
using System;
using KVKK.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace KVKK.API.Migrations
{
    [DbContext(typeof(KvkkDbContext))]
    partial class KvkkDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("KVKK.API.Models.BIRIM", b =>
                {
                    b.Property<string>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AD")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("AKTIFMI")
                        .HasColumnType("bit");

                    b.Property<string>("KURUMID")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("SILINDIMI")
                        .HasColumnType("bit");

                    b.HasKey("ID");

                    b.ToTable("BIRIM");
                });

            modelBuilder.Entity("KVKK.API.Models.KARTVIZIT", b =>
                {
                    b.Property<string>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AD")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ADRES")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("AKTIFMI")
                        .HasColumnType("bit");

                    b.Property<string>("BIRIM")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BIRIMID")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EPOSTA")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FAX")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IL")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ILCE")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("IZINVARMI")
                        .HasColumnType("bit");

                    b.Property<string>("KULLANICIID")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KURUMADI")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KURUMID")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("SILINDIMI")
                        .HasColumnType("bit");

                    b.Property<string>("SOYAD")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TELEFON")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UNVAN")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("KARTVIZIT");
                });

            modelBuilder.Entity("KVKK.API.Models.KULLANICI", b =>
                {
                    b.Property<string>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AD")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("AKTIFMI")
                        .HasColumnType("bit");

                    b.Property<string>("BIRIMID")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EPOSTA")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KURUMID")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ROLID")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SIFRE")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("SILINDIMI")
                        .HasColumnType("bit");

                    b.Property<string>("SOYAD")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TELEFON")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("KULLANICI");
                });

            modelBuilder.Entity("KVKK.API.Models.KURUM", b =>
                {
                    b.Property<string>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ADI")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ADRES")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("AKTIFMI")
                        .HasColumnType("bit");

                    b.Property<string>("IL")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ILCE")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("SILINDIMI")
                        .HasColumnType("bit");

                    b.HasKey("ID");

                    b.ToTable("KURUM");
                });

            modelBuilder.Entity("KVKK.API.Models.PAYLASIM", b =>
                {
                    b.Property<string>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool?>("AKTIFMI")
                        .HasColumnType("bit");

                    b.Property<bool?>("BITTIMI")
                        .HasColumnType("bit");

                    b.Property<string>("KARTVIZITID")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PAYLASANKULLANICIID")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("PAYLASIMISTEKTARIH")
                        .HasColumnType("datetime2");

                    b.Property<string>("PAYLASIMISTEYENKULLANICIID")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PAYLASIMSURE")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("PAYLASIM");
                });

            modelBuilder.Entity("KVKK.API.Models.ROL", b =>
                {
                    b.Property<string>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AD")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("ISDEFAULT")
                        .HasColumnType("bit");

                    b.Property<bool?>("ISSUPERADMIN")
                        .HasColumnType("bit");

                    b.HasKey("ID");

                    b.ToTable("ROL");
                });
#pragma warning restore 612, 618
        }
    }
}