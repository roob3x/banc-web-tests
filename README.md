# Projeto de Testes Automatizados com Cypress

Este projeto tem como objetivo demonstrar habilidades em automatizar testes web utilizando o Cypress. Através da automação, buscamos garantir a qualidade e a funcionalidade da aplicação web, proporcionando uma experiência de usuário mais confiável.

## Componentes do Projeto

- **Cypress**: Ferramenta de automação de testes que permite a execução de testes end-to-end.
- **Custom Commands**: Comandos personalizados que facilitam a reutilização de código e a organização dos testes.
- **cypress-mochawesome-reporter**: Utilizado para gerar relatórios detalhados dos testes executados.
- **API banco-api**: A API que deve estar em execução para que os testes possam interagir com os dados.
- **Aplicação banco-web**: A aplicação web que está sendo testada, que também deve estar em execução durante os testes.

## Guia de Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/juliodelimas/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie a API e a aplicação web:
   - Certifique-se de que a [banco-api](https://github.com/juliodelimas/banco-api) e a [banco-web](https://github.com/juliodelimas/banco-web) estão em execução.
4. Para abrir o Cypress:
   ```bash
   npx cypress open
   ```
5. Para executar os testes em modo headless:
   ```bash
   npx cypress run
   ```

## Documentação dos Testes e Custom Commands

Os testes estão organizados na pasta `cypress/e2e/`, onde cada arquivo contém um conjunto de testes para diferentes funcionalidades da aplicação. Os Custom Commands estão localizados na pasta `cypress/support/commands/`, permitindo que você adicione funcionalidades reutilizáveis que podem ser utilizadas em vários testes.