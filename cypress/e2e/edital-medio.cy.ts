import { getCurrentDateTime } from '../helpers/date.helper';

describe('Sistema Integrado de Gestão para Fundações de Amparo a Pesquisas', () => {
  beforeEach(() => {
    // Gancho em nível raíz
    // executa antes de realizar cada teste(it)
    cy.typelogin(
      'https://novo-sig.ledes.net',// [URL do sistema]
      'grupo11_gestor@sig.com', // [E-mail do usuário]
      'Grupo11@sig', // [Senha do usuário]
    ); //Acessa a página de login usando as credenciais do usuário e senha.
  });
  it.only('Realiza login no sistema e cria um edital médio', () => { //Teste edital médio, se houver mais de um teste, o it.only executa apenas esse teste.
    cy.get('[data-cy="nav-group-edital"]').click(); //Clica na aba Editais
    cy.get('[data-cy="nav-item-publicar-edital"]').click(); //Clica na opção Editais para acessar da página de Editais
    cy.get('[data-cy="add-publicar-edital"]').click(); //Clica no botão "Adicionar" para criação de um novo Edital
    cy.get('[data-cy="nome"]').type(
      'Grupo-11 E.M. 005/2025 ana-barbosa', //Nome do Edital
      { delay: 0 },
    ); //Preenche o campo "Nome" do Edital
    cy.get('[data-cy="restricoes"]').click(); //Clica na aba Restrições para seguir para a página de Restrições
    cy.get('[data-cy="definirDuracaoProjetoEmMeses"]').check(); //Marca a opção "Definir Duração do Projeto em Meses"
    cy.get('[data-cy="duracaoProjetoEmMeses"]').type('6'); //Preenche o campo "Duração do Projeto em Meses com o valor 6"
    cy.get('[data-cy="termo-de-aceite"]').click(); //Clica na aba de Termo de Aceite
    cy.get('[data-cy="termoDeAceite"]').click().realType('Texto do termo de aceite - Grupo 11'); //Clica no campo de Termo de Aceite

    cy.get('[data-cy=texto-do-edital]').click(); //Clica na aba Texto do Edital para seguir para a página de Texto do Edital
    cy.get('[data-cy="texto"]').click().realType('Texto do edital medio - Grupo 11'); //Preenche o campo "Texto do edital" com um texto padrão
    cy.get('[data-cy="abrangencia"]').click(); //Clica na aba Abrangência para seguir para a página de Abrangência
    cy.get('[data-cy="estado-sao-paulo"]').click(); //Clica no estado de São Paulo na lista de estados
    cy.get('[data-cy="estado-parana"]').click(); //Clica no estado de São Paulo na lista de estados
    cy.get('[data-cy="cronograma"]').click(); //Clica na aba Cronograma para seguir para a página de Cronograma
    cy.get('[data-cy="periodo-de-submissao"]').click(); //Clica na aba Período de Submissão para seguir para a página de Período de Submissão
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para criar um novo Período de Submissão
    cy.get('[data-cy="chamadaUnsaved.inicio"]').type(getCurrentDateTime()); //Preenche o campo "Início" do Período de Submissão com a data do dia de hoje
    cy.get('[data-cy="chamadaUnsaved.termino"]').type(
      getCurrentDateTime({ addYears: 1 }),
    ); //Preenche o campo "Término" do Período de Submissão com a data do dia de hoje + 1 ano
    cy.get('[data-cy="chamada-confirmar"]').click(); //Clica no botão "Salvar" para salvar as informações do Período de Submissão
    cy.get('[data-cy="orcamento"]').click(); //Clica na aba Orçamento para exibir as opções de Orçamento
    cy.get('[data-cy="programa"]').click(); //Clica em Programa para seguir para a página de Programa da aba de Orçamento
    cy.get('[data-cy="programaId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Streich, Torp and Bergnaum') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="perguntas"]').click(); //Clica na Aba de Perguntas
    cy.get('[data-cy="indicadores-de-producao"]').click(); //vai para a página de Indicadores de Produção na aba de Perguntas
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para criar um novo Indicador de Produção
    cy.get('[data-cy="indicadorProducaoUnsaved.id"]').click(); //Clica no campo de Indicador de Produção"
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Produção Bibliográfica') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="indicadorProducao-confirmar"]').click(); //Clica no botão "Confirmar" para adicionar Indicador de Produção
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para criar um novo Indicador de Produção
    cy.get('[data-cy="indicadorProducaoUnsaved.id"]').click(); //Clica no campo de Indicador de Produção"
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Produção Cultural') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="indicadorProducao-confirmar"]').click(); //Clica no botão "Confirmar" para adicionar Indicador de Produção
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para criar um novo Indicador de Produção
    cy.get('[data-cy="indicadorProducaoUnsaved.id"]').click(); //Clica no campo de Indicador de Produção"
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Produção Técnica ou Tecnológica') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="indicadorProducao-confirmar"]').click(); //Clica no botão "Confirmar" para adicionar Indicador de Produção
    cy.get('[data-cy="menu-salvar"]').click(); //Clica no botão "Salvar" para salvar as informações do Edital
    cy.get('[data-cy="menu-finalizar"]').click(); //Clica no botão "Finalizar" para salvar e sair da área de adição do Edital
    });
});