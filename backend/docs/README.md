![Static Badge](https://img.shields.io/badge/version-1.0.0-blue)

# Dexian - Alunos API
![](https://raw.githubusercontent.com/hudson-nascimento/Dexian/developer/backend/docs/screenshot-alunos-api.png?w=200)

## Descrição
Gerencia alunos de uma escola, permitindo as operações REST para criar, ler, atualizar e apagar dados, as informações inseridas serão perdidas após o fim da execução do projeto.

## Configuração

### Para executar a API

```shell
$ git clone https://github.com/hudson-nascimento/Dexian.git
$ cd .\backend\src\Dexian.Api
$ dotnet restore
$ dotnet build
$ dotnet run
```
Neste projeto foi habilitado o [Swagger UI](https://swagger.io/tools/swagger-ui/) e o [Redoc](https://github.com/Redocly/redoc) para visualização da API.

Para acessar via browser use as url:
http://localhost:5173/swagger ou http://localhost:5173/redoc

## Tecnologias

* [ASP.NET Core](https://learn.microsoft.com/pt-br/aspnet/core/?view=aspnetcore-8.0)
* [Minimal API](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis?view=aspnetcore-7.0)
* [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core)
