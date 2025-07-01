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
  it('Realiza login no sistema e submete uma proposta', () => {
    cy.get('[data-cy="user-menu"]').click(); //Clica no menu do usuário para acessar as opções de perfil
    cy.get('[data-cy="editar-perfil"]').click(); //Clica na opção "Editar Perfil" para acessar a página de edição do perfil do usuário
    cy.get('.ex40wuf1').click(); //Clica no botão "Próximo" para editar
    cy.get('[data-cy="endereco.cep"]').type('79062-758'); //Preenche o campo "CEP" com um número fictício
    cy.get('[data-cy="endereco.numero"]').type('2'); //Preenche o campo "Número" com um número fictício

    cy.get('[data-cy="breadcrumb-home"]').click(); //Clica no botão "Home" para retornar à página anterior
    cy.get('[data-cy="editais-ver-mais"]').click(); //Clica no botão "Ver Mais" para acessar a página de Editais

    cy.get('[data-cy-index="visualizar-edital-9"]').click(); //Edite essa linha para selecionar o Edital respectivo

    cy.wait(300); //Aguarda 300ms para garantir que a página foi carregada completamente
    cy.get('[data-cy="criar-proposta"]').click(); //Clica no botão "Criar Proposta" para iniciar o processo de criação de uma nova proposta
    cy.get('[data-cy="tituloDoProjeto"]').type(
        'Submissão de Proposta de Teste', //Preenche o campo "Título do Projeto" com o valor "Submissão de Proposta de Teste"
        { delay: 0 },
    )
    //Atividade 3 - Faça a continuidade do teste, preenchendo os campos obrigatórios da proposta.

    //cy.get('[data-cy="areaDeConhecimento-adicionar"]').click(); //Clica no botao Adicionar de seleção de Área de Conhecimento
    cy.get('[data-cy-index="areaDeConhecimento-0-expandable-item"]').click(); //Clica na área de conhecimento expandida para selecionar a primeira opção
    cy.get('[data-cy="areaDeConhecimento.0.grandeAreaId"]').click(); //Clica no campo de seleção de Grande Área de Conhecimento
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
        .contains('Engenharias') // Encontra o item que contém o texto
        .click(); // Clica nele
    cy.get('[data-cy="areaDeConhecimento.0.areaId"]').click(); //Clica no campo de seleção de Área de Conhecimento
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
      .contains('Engenharia Civil') // Encontra o item que contém o texto
      .click(); // Clica nele

    //cy.get('[data-cy="abrangencia"]').click(); //Clica no campo de seleção de Abrangência
    //cy.get('[data-cy="abrangencia-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Abrangência

    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para avançar para a próxima etapa do formulário de proposta
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para avançar para a próxima etapa do formulário de proposta

    cy.get('[data-cy="criadoPor.documento"]').type('700.535.010-39'); //Preenche o campo "CPF" com um número fictício
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para avançar para a próxima etapa do formulário de proposta

    //cy.get('[data-cy="criadoPor.endereco.cep"]').type('79002-052'); //Preenche o campo "CEP" com um número fictício
    //cy.get('[data-cy="criadoPor.endereco.numero"]').type('123'); //Preenche o campo "Número" com um número fictício
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para avançar para a próxima etapa do formulário de proposta

    cy.get('[data-cy="criadoPor.instituicaoId"]').click(); //Clica no campo de seleção de Instituição
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
      .contains('UFMS/Universidade Federal do Mato Grosso do Sul') // Encontra o item que contém o texto
      .click(); // Clica nele
    cy.get('[data-cy="criadoPor.unidadeId"]').click(); //Clica no campo de seleção de Unidade
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
      .contains('FAENG/Faculdade de Engenharias, Arquitetura e Urbanismo e Geografia') // Encontra o item que contém o texto
      .click(); // Clica nele
    cy.get('[data-cy="criadoPor.nivelAcademicoId"]').click(); //Clica no campo de seleção de Nível Acadêmico
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
      .contains('Mestrado') // Encontra o item que contém o texto
      .click(); // Clica nele
    cy.get('[data-cy="criadoPor.areaDeConhecimento-adicionar"]').click(); //Clica no botão "Adicionar" para adicionar uma nova Área de Conhecimento
    cy.get('[data-cy-index="criadoPor.areaDeConhecimento-0-expandable-item"]').click(); //Clica na área de conhecimento expandida para selecionar a primeira opção
    cy.get('[data-cy="criadoPor.areaDeConhecimento.0.grandeAreaId"]').click(); //Clica no campo de seleção de Grande Área de Conhecimento
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
      .contains('Engenharias') // Encontra o item que contém o texto
      .click(); // Clica nele
    cy.get('[data-cy="criadoPor.areaDeConhecimento.0.areaId"]').click(); //Clica no campo de seleção de Área de Conhecimento
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções
      .contains('Engenharia Civil') // Encontra o item que contém o texto
      .click(); // Clica nele
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para avançar para a próxima etapa do formulário de proposta

    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para avançar para a próxima etapa do formulário de proposta
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para avançar para a próxima etapa do formulário de proposta
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para avançar para a próxima etapa do formulário de proposta
    //cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para avançar para a próxima etapa do formulário de proposta

    cy.get('[data-cy="termoDeAceiteAceito"]').check(); //Marca a caixa de seleção "Termo de Aceite Aceito" para aceitar os termos e condições
    cy.get('[data-cy="menu-salvar"]').click(); //Clica no botão "Salvar" para salvar as informações da proposta
    cy.get('[data-cy="menu-verificar-penden"]').click(); //Clica no botão "Verificar Pendências" para verificar se há pendências na proposta
    cy.get('.ex40wuf2').click(); //Clica no botão "Submeter Proposta" para enviar a proposta para análise

  }); //Cria uma nova proposta de acordo com o edital selecionado
});