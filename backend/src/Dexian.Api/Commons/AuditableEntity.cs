namespace Dexian.Commons;

public class AuditableEntity
{
    /// <summary>
    /// Data de criacao
    /// </summary>
    
    public DateTimeOffset Created { get; set; }
    /// <summary>
    /// Responsavel por criar
    /// </summary>
   
    public string? CreatedBy { get; private set; } = "Dexian";
    /// <summary>
    /// Data de Alteracao
    /// </summary>
  
    public DateTimeOffset LastModified { get; set; }
    /// <summary>
    /// Responsavel pela alteracao
    /// </summary>
   
    public string? LastModifiedBy { get; set; }
}