using Dexian.Entities;

namespace Dexian.Api.Services
{
    public interface IAlunoService
    {
        List<Aluno> GetAlunos();

        Aluno GetAlunoByCode(int id);
    }
}
