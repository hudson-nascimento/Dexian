using Dexian.Entities;

namespace Dexian.Api.Services
{
    public class AlunoService : IAlunoService
    {
        private readonly List<Aluno> _alunos;

        /// <summary>
        /// COnstrutor do método
        /// </summary>
        public AlunoService()
        {
            _alunos = new List<Aluno>
            {
                //new()
                //{
                //    CodAluno = 1,
                //    Nome = "Dependency Injection in .NET",
                //    Author = "Mark Seemann"
                //},

            };
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public List<Aluno> GetAlunos()
        {
            return this._alunos;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="codAluno"></param>
        /// <returns></returns>
        public async Task<Aluno> GetAlunoByCode(int codAluno)
        {
            var aluno = _alunos.FirstOrDefault(a => a.CodAluno == codAluno);

            return aluno;
        }

    }
}