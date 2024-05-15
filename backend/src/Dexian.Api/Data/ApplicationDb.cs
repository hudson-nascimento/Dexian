using Dexian.Entities;
using Microsoft.EntityFrameworkCore;

namespace Dexian.Data;
class ApplicationDb(DbContextOptions<ApplicationDb> options) : DbContext(options)
{
    public DbSet<Aluno> Alunos => Set<Aluno>();
    public DbSet<Escola> Escolas => Set<Escola>();
}