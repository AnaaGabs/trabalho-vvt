import { getCurrentDateTime } from '../helpers/date.helper';
import { EDITAL_ID, getEditalFullName } from '../config/edital.config';

describe('Sistema Integrado de Gestão para Fundações de Amparo a Pesquisas', () => {
  beforeEach(() => {
    // Gancho em nível raíz
    // executa antes de realizar cada teste(it)
    cy.typelogin(
      'https://novo-sig.ledes.net',// [URL do sistema]
      'grupo11_pesq@sig.com', // [E-mail do usuário]
      'Grupo11@sig', // [Senha do usuário]
    ); //Acessa a página de login usando as credenciais do usuário e senha.
  });
  it.only('Realiza login no sistema e submete uma proposta de edital médio', () => { //executa apenas o teste de submissão de proposta médio
    cy.get('[data-cy="breadcrumb-home"]').click(); //Vai para a página inicial
    cy.get('[data-cy="editais-ver-mais"]').click(); //Clica para ver mais editais
    cy.get('[data-cy="visualizar-edital-grupo-11-e-m-012"]').click(); //Edite essa linha para selecionar o Edital respectivo 
    // Log para facilitar a identificação do ID usado no teste
    cy.log(`Buscando edital com ID: ${EDITAL_ID}`);

    cy.wait(300); //Aguarda 300ms para garantir que a página foi carregada completamente
    cy.get('[data-cy="criar-proposta"]').click(); //Clica no botão "Criar Proposta" para iniciar o processo de criação de uma nova proposta
    cy.get('[data-cy="tituloDoProjeto"]').type(
        'Submissão de Proposta - Edital Médio', //Preenche o campo "Título do Projeto" com o valor "Submissão de Proposta de Teste"
        { delay: 0 },
    )
    cy.get('[data-cy="instituicaoExecutoraId"]').click(); //Clica no campo de instituição Executora
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('UFMS/Universidade Federal do Mato Grosso do Sul') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="unidadeExecutoraId"]').click(); //Clica no campo de unidade Executora
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('FACOM/Faculdade de Computação') // Encontra o item que contém o texto
    .click(); // Clica nele
    //cy.get('[data-cy="areaDeConhecimento-adicionar"]').click(); //Clica no botão de adicionar para selecionar Área de Conhecimento
    cy.get('[data-cy="areaDeConhecimento-area-de-conhecim-expandable-item"]').click();
    cy.get('[data-cy="areaDeConhecimento.0.grandeAreaId"]').click(); //Clica no campo de Grande área"
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Ciências Exatas e da Terra') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="areaDeConhecimento.0.areaId"]').click(); //Clica no campo de Indicador de Produção"
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Ciência da Computação') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="areaDeConhecimento.0.subAreaId"]').click(); //Clica no campo de Indicador de Produção"
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Sistemas de Computação') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="areaDeConhecimento.0.especialidadeId"]').click(); //Clica no campo de Indicador de Produção"
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Software Básico') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //Abrangência
    cy.get('[data-cy="abrangencia-adicionar"]').click(); //Clica no botão adicionar para selecionar Abrangência
    cy.get('[data-cy="abrangencia.0.estadoId"]').click(); //Clica no campo para selecionar o Estado
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Paraná') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="abrangencia.0.abrangenciaMunicipio"]').click(); //Clica no campo para selecionar o município
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Curitiba') // Encontra o item que contém o texto
    .click(); // Clica nele
    /* cy.get('[data-cy="abrangencia.0.abrangenciaMunicipio"]').click(); //Clica no campo para selecionar o município
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Maringá') // Encontra o item que contém o texto
    .click(); // Clica nele */
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //Dados pessoais
    cy.get('[data-cy="criadoPor.paisId"]').click(); //Clica no campo para selecionar o país
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Brasil') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="criadoPor.documento"]').type(
        '95681060063', //Preenche o campo "cpf"
        { delay: 0 },
    )
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //Endereço
    cy.get('[data-cy="criadoPor.endereco.cep"]').type(
        '79050010', //Preenche o campo "CEP" com o cep da UFMS
        { delay: 0 },
    )
    cy.get('[data-cy="criadoPor.endereco.numero"]').type(
        '222', //Preenche o campo Bairro
        { delay: 0 },
    )
    cy.get('[data-cy="menu-salvar"]').click(); //salva as informações do endereço
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //Dados acadêmicos
    cy.get('[data-cy="criadoPor.instituicaoId"]').click(); //Clica no campo de Instituição Acadêmica
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('UFMS/Universidade Federal do Mato Grosso do Sul') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="criadoPor.unidadeId"]').click(); //Clica no campo de unidade acadêmica
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('FACOM/Faculdade de Computação') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="criadoPor.nivelAcademicoId"]').click(); //Clica no campo de nível acadêmico
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Ensino Superior') // Encontra o item que contém o texto
    .click(); // Clica nele
    //cy.get('[data-cy="criadoPor.areaDeConhecimento-adicionar"]').click(); //Clica no botão de adicionar para selecionar Área de Conhecimento
    cy.get('[data-cy="criadoPor.areaDeConhecimento-area-de-conhecim-expandable-item"]').click();
    cy.get('[data-cy="criadoPor.areaDeConhecimento.0.grandeAreaId"]').click(); //Clica no campo de Grande área
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Ciências Exatas e da Terra') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="criadoPor.areaDeConhecimento.0.areaId"]').click(); //Clica no campo de Área de Conhecimento
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Ciência da Computação') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="criadoPor.0.subAreaId"]').click(); //Clica no campo de sub área de conhecimento
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Sistemas de Computação') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="criadoPor.areaDeConhecimento.0.especialidadeId"]').click(); //Clica no campo de especialidade
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Software Básico') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //dados profissionais
    cy.get('[data-cy="criadoPor.possuiVinculoInstitucional-boolean"]').check(); //seleciona o campo "Possuo Vínculo Institucional"
    cy.get('[data-cy="criadoPor.possuiVinculoInstitucional.tipoVinculoInstitucionalId"]').click();
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Bolsista') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //indicadores de produção
    cy.get('.mui-156', { timeout: 5000 }).should('be.visible'); // Espera o editor carregar
    cy.get('.mui-156').clear().realType('1', { delay: 0 }); // Insere o texto com realType
    cy.get('.mui-186', { timeout: 5000 }).should('be.visible'); // Espera o editor carregar
    cy.get('.mui-186').clear().realType('1', { delay: 0 }); // Insere o texto com realType
    cy.get('.mui-190', { timeout: 5000 }).should('be.visible'); // Espera o editor carregar
    cy.get('.mui-190').clear().realType('1', { delay: 0 }); // Insere o texto com realType
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //Atividades
    cy.get('[data-cy="propostaAtividade-adicionar"]').click(); //Clica no botão de adicionar para selecionar Atividades
    cy.get('[data-cy="propostaAtividade.0.titulo"]').type(
        'Teste de Proposta - Edital Médio', //Preenche o campo "Título da proposta" com o valor "Teste de Proposta - Edital Médio"
        { delay: 0 },
    )
    cy.get('[data-cy="propostaAtividade.0.mesInicio"]').click(); //clica no campo de mês de início
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('1°') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="propostaAtividade.0.duracao"]').click(); //clica no campo de duração
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('3 meses') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="propostaAtividade.0.cargaHorariaSemanal"]').click(); //clica no campo de carga horária 
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('20 horas') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="propostaAtividade.0.membroRespondavelId"]').click(); //clica no campo de resposável
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Grupo 11 Pesquisador') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //termo de aceite
    cy.get('[data-cy="termoDeAceiteAceito-boolean"]').check();
    });
});