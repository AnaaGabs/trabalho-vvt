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

  it.only('Realiza login no sistema e cria um edital completo', () => { //Teste edital completo, se houver mais de um teste, o it.only executa apenas esse teste.
    cy.get('[data-cy="nav-group-edital"]').click(); //Clica na aba Editais
    cy.get('[data-cy="nav-item-publicar-edital"]').click(); //Clica na opção Editais para acessar da página de Editais
    cy.get('[data-cy="add-publicar-edital"]').click(); //Clica no botão "Adicionar" para criação de um novo Edital
    cy.get('[data-cy="nome"]').type(
      'Grupo-11 E.M. 005/2025 aline-hirokawa', //Edite essa linha para preencher o nome do Edital
      { delay: 0 },
    ); //Preenche o campo "Nome" do Edital

    cy.get('[data-cy="restricoes"]').click(); //Clica na aba Restrições para seguir para a página de Restrições
    cy.get('[data-cy="definirDuracaoProjetoEmMeses"]').check(); //Marca a opção "Definir Duração do Projeto em Meses"
    cy.get('[data-cy="duracaoProjetoEmMeses"]').type('6'); //Preenche o campo "Duração do Projeto em Meses com o valor 6"
    cy.get('[data-cy="pesquisadorSubmeterVariasPropostas"]').check(); //Marca a opção "Pesquisador pode submeter várias propostas"
    cy.get('[data-cy="termo-de-aceite"]').click(); //Clica na aba de Termo de Aceite
    cy.get('.ck-editor__editable', { timeout: 5000 }).should('be.visible'); // Espera o editor carregar
    cy.get('[data-cy="termoDeAceite"]').realType(
      'Termo de Aceite do Edital Completo', //Preenche o campo "Termo de Aceite" com um texto padrão
      { delay: 0 },
    ); //Preenche o campo "Termo de Aceite" do Edital

    cy.get('[data-cy=texto-do-edital]').click(); //Clica na aba Texto do Edital para seguir para a página de Texto do Edital
    cy.get('.ck-editor__editable', { timeout: 5000 }).should('be.visible'); // Espera o editor carregar
    cy.get('[data-cy="texto"]').realType('Texto do Edital Completo', { delay: 0 }); //Preenche o campo "Texto" do Edital com um texto padrão
    cy.get('[data-cy="abrangencia"]').click(); //Clica na aba Abrangência para seguir para a página de Abrangência
    cy.get('[data-cy="estado-todos"]').click(); //Clica em Todos na lista de estados em Abrangência

    cy.get('[data-cy="informacoes-complementares"]').click(); //Clica na aba Informações Complementares para seguir para a página de Informações Complementares
    cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Informação Complementar
    cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Informação Complementar
    cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Informação Complementar
    cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Informação Complementar
    cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Informação Complementar

    cy.get('[data-cy="cronograma"]').click(); //Clica na aba Cronograma para seguir para a página de Cronograma
    cy.get('[data-cy="periodo-de-submissao"]').click(); //Clica na aba Período de Submissão para seguir para a página de Período de Submissão
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para criar um novo Período de Submissão
    cy.get('[data-cy="chamadaUnsaved.inicio"]').type(getCurrentDateTime()); //Preenche o campo "Início" do Período de Submissão com a data do dia de hoje
    cy.get('[data-cy="chamadaUnsaved.termino"]').type(
      getCurrentDateTime({ addYears: 1 }),
    ); //Preenche o campo "Término" do Período de Submissão com a data do dia de hoje + 1 ano
    cy.get('[data-cy="chamada-confirmar"]').click(); //Clica no botão "Salvar" para salvar as informações do Período de Submissão

    cy.get('[data-cy="orcamento"]').click(); //Clica na aba Orçamento para exibir as opções de Orçamento
    cy.get('[data-cy="programa"]').click(); //Clica na aba Programa para seguir para a página de Programa
    cy.get('[data-cy="add-natureza-da-despesa"]').click(); //Clica no botão "Adicionar" para adicionar um novo Programa
    cy.get('[data-cy="programaId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('Streich, Torp and Bergnaum') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="naturezaDespesaEdital-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações do Programa
    cy.get('[data-cy="rubricas"]').click(); //Clica na aba Rubricas para seguir para a página de Rubricas
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Rubrica
    cy.get('[data-cy="editalRubricaUnsaved.tipoEditalRubrica"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('Bolsa') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="editalRubricaUnsaved.naturezaDespesaId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('Custeio') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="editalRubrica-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações da Rubrica
    cy.get('[data-cy="faixas-de-financiamento"]').click(); //Clica na aba Faixas de Financiamento para seguir para a página de Faixas de Financiamento
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Faixa de Financiamento
    cy.get('[data-cy="faixaFinanciamentoUnsaved.nome"]').type(
        'Faixa de Financiamento 1', //Preenche o campo "Faixa de Financiamento" com um texto padrão
        { delay: 0 },
    ); //Preenche o campo "Faixa de Financiamento" da Faixa de Financiamento
    cy.get('[data-cy="faixaFinanciamento-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações da Faixa de Financiamento
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Faixa de Financiamento
    cy.get('[data-cy="faixaFinanciamentoUnsaved.nome"]').type(
        'Faixa de Financiamento 2', //Preenche o campo "Faixa de Financiamento" com um texto padrão
        { delay: 0 },
    ); //Preenche o campo "Faixa de Financiamento" da Faixa de Financiamento
    cy.get('[data-cy="faixaFinanciamento-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações da Faixa de Financiamento
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Faixa de Financiamento
    cy.get('[data-cy="faixaFinanciamentoUnsaved.nome"]').type(
        'Faixa de Financiamento 3', //Preenche o campo "Faixa de Financiamento" com um texto padrão
        { delay: 0 },
    ); //Preenche o campo "Faixa de Financiamento" da Faixa de Financiamento
    cy.get('[data-cy="faixaFinanciamento-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações da Faixa de Financiamento
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Faixa de Financiamento
    cy.get('[data-cy="faixaFinanciamentoUnsaved.nome"]').type(
        'Faixa de Financiamento 4', //Preenche o campo "Faixa de Financiamento" com um texto padrão
        { delay: 0 },
    ); //Preenche o campo "Faixa de Financiamento" da Faixa de Financiamento
    cy.get('[data-cy="faixaFinanciamento-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações da Faixa de Financiamento
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Faixa de Financiamento
    cy.get('[data-cy="faixaFinanciamentoUnsaved.nome"]').type(
        'Faixa de Financiamento 5', //Preenche o campo "Faixa de Financiamento" com um texto padrão
        { delay: 0 },
    ); //Preenche o campo "Faixa de Financiamento" da Faixa de Financiamento
    cy.get('[data-cy="faixaFinanciamento-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações da Faixa de Financiamento

    cy.get('[data-cy="documentos"]').click(); //Clica na aba Documentos para seguir para a página de Documentos
    cy.get('[data-cy="documentos-da-proposta"]').click(); //Clica na aba Documentos da Proposta para seguir para a página de Documentos da Proposta
    cy.get('[data-cy="documentoPropostaEdital-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar um novo Documento de Proposta
    cy.get('[data-cy="documentoPropostaEdital.0.nome"]').realType(
        'Doc1', //Preenche o campo "Nome do Documento" com um texto padrão
    ); //Preenche o campo "Nome do Documento" do Documento de Proposta
    cy.get('[data-cy="documentoPropostaEdital-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar um novo Documento de Proposta
    cy.get('[data-cy="documentoPropostaEdital.1.nome"]').realType(
        'Doc2', //Preenche o campo "Nome do Documento" com um texto padrão
    ); //Preenche o campo "Nome do Documento" do Documento de Proposta
    cy.get('[data-cy="documentos-pessoais"]').click(); //Clica na aba Documentos Pessoais para seguir para a página de Documentos Pessoais
    cy.get('[data-cy="documentoPessoalEdital-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar um novo Documento Pessoal
    cy.get('[data-cy="documentoPessoalEdital.0.documentoPessoalId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('RG') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="documentoPessoalEdital-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar um novo Documento Pessoal
    cy.get('[data-cy="documentoPessoalEdital.1.documentoPessoalId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('CPF') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="documentoPessoalEdital-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar um novo Documento Pessoal
    cy.get('[data-cy="documentoPessoalEdital.0.documentoPessoalId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('Comprovante de Residência') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="documentoPessoalEdital-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar um novo Documento Pessoal
    cy.get('[data-cy="documentoPessoalEdital.0.documentoPessoalId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('Passaporte') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="documentoPessoalEdital-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar um novo Documento Pessoal
    cy.get('[data-cy="documentoPessoalEdital.0.documentoPessoalId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('Título de eleitor') // Encontra o item que contém o texto
        .click(); // Clica nele

    cy.get('[data-cy="perguntas"]').click(); //Clica na aba Perguntas para seguir para a página de Perguntas
    cy.get('[data-cy="descricao-do-projeto"]').click(); //Clica na aba Descrição do Projeto para seguir para a página de Descrição do Projeto
    cy.get('[data-cy="pergunta-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Pergunta
    cy.get('[data-cy="pergunta.0.pergunta"]').realType(
        'Pergunta Descricao do Projeto 1', //Preenche o campo "Pergunta Descricao do Projeto 1" com uma pergunta padrão
        { delay: 0 },
    ); //Preenche o campo "Pergunta Descricao do Projeto 1" da Pergunta
    cy.get('[data-cy="pergunta-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Pergunta
    cy.get('[data-cy="pergunta.1.pergunta"]').realType(
        'Pergunta Descricao do Projeto 2', //Preenche o campo "Pergunta Descricao do Projeto 2" com uma pergunta padrão
        { delay: 0 },
    ); //Preenche o campo "Pergunta Descricao do Projeto 2" da Pergunta
    cy.get('[data-cy="pergunta-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Pergunta
    cy.get('[data-cy="pergunta.2.pergunta"]').realType(
        'Pergunta Descricao do Projeto 3', //Preenche o campo "Pergunta Descricao do Projeto 3" com uma pergunta padrão
        { delay: 0 },
    ); //Preenche o campo "Pergunta Descricao do Projeto 3" da Pergunta
    cy.get('[data-cy="pergunta-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Pergunta
    cy.get('[data-cy="pergunta.3.pergunta"]').realType(
        'Pergunta Descricao do Projeto 4', //Preenche o campo "Pergunta Descricao do Projeto 4" com uma pergunta padrão
        { delay: 0 },
    ); //Preenche o campo "Pergunta Descricao do Projeto 4" da Pergunta
    cy.get('[data-cy="pergunta-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Pergunta
    cy.get('[data-cy="pergunta.4.pergunta"]').realType(
        'Pergunta Descricao do Projeto 5', //Preenche o campo "Pergunta Descricao do Projeto 5" com uma pergunta padrão
        { delay: 0 },
    ); //Preenche o campo "Pergunta Descricao do Projeto 5" da Pergunta
    cy.get('[data-cy="indicadores-de-producao"]').click(); //Clica na aba Indicadores do Producao para seguir para a página de Indicadores do Projeto
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar um novo Indicador do Producao
    cy.get('[data-cy="indicadorProducaoUnsaved.id"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('Produção Cultural') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="indicadorProducao-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações do Indicador do Producao
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar um novo Indicador do Producao
    cy.get('[data-cy="indicadorProducaoUnsaved.id"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('Produção Bibliográfica') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="indicadorProducao-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações do Indicador do Producao
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar um novo Indicador do Producao
    cy.get('[data-cy="indicadorProducaoUnsaved.id"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('Teste') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="indicadorProducao-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações do Indicador do Producao

    cy.get('[data-cy="bolsas-do-edital"]').click(); //Clica na aba Bolsas do Edital para seguir para a página de Bolsas do Edital
    cy.get('[data-cy="bolsas"]').click(); //Clica na aba Bolsas para seguir para a página de Bolsas
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Bolsa
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('AT') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('NM R$ 560,00)') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="bolsaEdital-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações da Bolsa
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Bolsa
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('DCT') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('II (0H - R$ 5.220,00)') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="bolsaEdital-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações da Bolsa
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Bolsa
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('EXP') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('B R$ 3.900,00)') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="bolsaEdital-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações da Bolsa
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Bolsa
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('SET') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('C (0H - € 880,00)') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="bolsaEdital-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações da Bolsa
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Bolsa
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('DTI-CNPq') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click(); //clica no campo de seleção de Programa
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('B (0H - R$ 670,00)') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="bolsaEdital-confirmar"]').click(); //Clica no botão "Confirmar" para salvar as informações da Bolsa
    
    cy.get('[data-cy="menu-salvar"]').click(); //Clica no botão "Salvar" para salvar as informações do Edital
    cy.get('[data-cy="menu-finalizar"]').click(); //Clica no botão "Finalizar" para salvar e sair da área de adição do Edital   
    });
});