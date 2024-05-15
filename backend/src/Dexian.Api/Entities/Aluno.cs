using System.ComponentModel.DataAnnotations;
using Dexian.Commons;

namespace Dexian.Entities;
public class Aluno : AuditableEntity
{
    [Key]
    public int CodAluno { get; private set; }
    [Required]
    public string? Nome { get; set; }
    [Required]
    public DateTimeOffset Nascimento { get; set; }
    [Required]
    public string? CPF { get; set; }
    public string? Endereco { get; set; }
    public string? Celular { get; set; }
    [Required]
    public int CodEscola { get; set; }

}