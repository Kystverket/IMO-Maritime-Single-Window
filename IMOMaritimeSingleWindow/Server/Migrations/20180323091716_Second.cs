using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Migrations
{
    public partial class Second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("truncate table public.\"Person\" cascade");
            migrationBuilder.Sql("truncate table public.\"Role\" cascade");
        }
    }
}
