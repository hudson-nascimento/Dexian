using System.ComponentModel.DataAnnotations;
using Dexian.Commons;

namespace Dexian.Entities;
/// <summary>
/// Representa as propriedades de <see cref="Escola"/>
/// </summary>
public class Escola
{
    [Key]
    public int CodEscola { get; set; }    
    public string? Decricao { get; set; }
}