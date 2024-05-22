using Dexian.Data;
using Dexian.Entities;
using Microsoft.EntityFrameworkCore;
using NSwag;
using Serilog;

try
{
    var builder = WebApplication.CreateBuilder(args);

    // Configure Data base
    builder.Services.AddDbContext<ApplicationDb>(options => options.UseInMemoryDatabase("Alunos"));
    builder.Services.AddDatabaseDeveloperPageExceptionFilter();

    // Configure Swagger middleware
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddOpenApiDocument(static config =>
    {
        config.PostProcess = document =>
        {
            document.Info = new OpenApiInfo
            {
                Version = "v1",
                Title = "Alunos API",
                Description = "Web API ASP.NET Core para gerenciar Alunos da Dexian",
                TermsOfService = "https://github.com/hudson-nascimento/Dexian/docs/terms",
                Contact = new OpenApiContact
                {
                    Name = "Contact",
                    Url = "https://github.com/hudson-nascimento/Dexian/contact"
                },
                License = new OpenApiLicense
                {
                    Name = "License",
                    Url = "https://github.com/hudson-nascimento/Dexian/docs/license"
                }
            };
        };
    });

    builder.Services.AddCors(options => options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(
            "http://localhost:4200",
            "https://localhost:4200");
    }));

    var app = builder.Build();

    // Information about API
    if (app.Environment.IsDevelopment())
    {
        app.UseOpenApi();
        app.UseSwaggerUi(config =>
        {
            config.DocumentTitle = $"Alunos API - {app.Environment.EnvironmentName} Environment";
            config.Path = "/swagger";
            config.DocumentPath = "/swagger/{documentName}/swagger.json";
            config.DocExpansion = "list";
        });
    }

    app.UseCors(builder => builder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader()
        );

    app.UseReDoc(options =>
    {
        options.Path = "/redoc";
    });

    // Configura Log
    var logger = new LoggerConfiguration()
        .Enrich.FromLogContext()
        .WriteTo.Console()
        .CreateLogger();

    // Endpoints
    #region Enpoints  

    app.MapGet("/obter-alunos", async (ApplicationDb db) =>
        await db.Alunos.ToListAsync())
        .WithOpenApi(operation =>
        new Microsoft.OpenApi.Models.OpenApiOperation(operation)
        {
            Summary = "Obtem alunos",
            Description = "Retorna lista de alunos e suas informações.",
            Tags = [new() { Name = "Alunos" }]
        });

    app.MapGet("/obter-aluno-por-codigo/{codAluno}", async (int codAluno, ApplicationDb db) =>
    await db.Alunos.FindAsync(codAluno)
        is Aluno aluno
            ? Results.Ok(aluno)
            : Results.NotFound())
        .WithOpenApi(operation =>
        new Microsoft.OpenApi.Models.OpenApiOperation(operation)
        {
            Summary = "Obtem aluno por codigo",
            Description = "Retorna informações sobre o aluno selecionado.",
            Tags = [new() { Name = "Alunos" }]
        });

    app.MapPost("/criar-aluno", async (Aluno aluno, ApplicationDb db) =>
    {
        db.Alunos.Add(aluno);
        await db.SaveChangesAsync();
    })
    .WithOpenApi(operation =>
    new Microsoft.OpenApi.Models.OpenApiOperation(operation)
    {
        Summary = "Cria novo aluno",
        Description = "Retorna aluno criado.",
        Tags = [new() { Name = "Alunos" }]
    });

    app.MapDelete("/deletar-aluno/{CodAluno}", async (int CodAluno, ApplicationDb db) =>
    {
        // Se o aluno existir efetua a delecao do cadastro
        if (await db.Alunos.FindAsync(CodAluno) is Aluno aluno)
        {
            db.Alunos.Remove(aluno);
            await db.SaveChangesAsync();
            return Results.NoContent();
        }

        return Results.NoContent();
    })
        .WithOpenApi(operation =>
        new Microsoft.OpenApi.Models.OpenApiOperation(operation)
        {
            Summary = "Deleta o aluno por codigo",
            Description = "Deleta o aluno selecionado.",
            Tags = [new() { Name = "Alunos" }]
        });

    app.MapGet("/obter-escola", async (ApplicationDb db) =>
        await db.Escolas.ToListAsync()).WithOpenApi(operation =>
    new Microsoft.OpenApi.Models.OpenApiOperation(operation)
    {
        Summary = "Obtem escolas",
        Description = "Retorna escola.",
        Tags = [new() { Name = "Escola" }]
    });

    app.MapPost("/criar-escola", async (Escola escola, ApplicationDb db) =>
    {
        db.Escolas.Add(escola);
        await db.SaveChangesAsync();
    }).WithOpenApi(operation =>
    new Microsoft.OpenApi.Models.OpenApiOperation(operation)
    {
        Summary = "Cria nova escola",
        Description = "Retorna escola criada.",
        Tags = [new() { Name = "Escola" }]
    });

    app.MapDelete("deletar-escola/{CodEscola}", async (int CodEscola, ApplicationDb db) =>
    {
        // Se o escola existir efetua a delecao do cadastro
        if (await db.Alunos.FindAsync(CodEscola) is Aluno escola)
        {
            db.Alunos.Remove(escola);
            await db.SaveChangesAsync();
            return Results.NoContent();
        }

        return Results.NoContent();
    })
        .WithOpenApi(operation =>
        new Microsoft.OpenApi.Models.OpenApiOperation(operation)
        {
            Summary = "Deleta escola por codigo",
            Description = "Deleta a escola selecionado.",
            Tags = [new() { Name = "Escola" }]
        });
    #endregion

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Application terminated unexpectedly");
}
finally
{
    Log.CloseAndFlush();
}