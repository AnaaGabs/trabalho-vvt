import { getCurrentDateTime } from '../helpers/date.helper';

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
    cy.get('[data-cy="visualizar-edital-grupo-11-e-m-024"]').click(); //Edite essa linha para selecionar o Edital respectivo

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

    //Endereço é preenchido automaticamente com os dados do usuário logado
    cy.get('[data-cy="menu-salvar"]').click(); //salva as informações do endereço
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //dados profissionais
    cy.get('[data-cy="dados-profissionais"]').click(); //Clica no botão de adicionar para selecionar Dados Profissionais
    cy.get('[data-cy="criadoPor.possuiVinculoInstitucional"]').check(); //seleciona o campo "Possuo Vínculo Institucional"
    cy.get('[data-cy="criadoPor.vinculoInstitucional.tipoVinculoInstitucionalId"]').click();
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Bolsista') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //indicadores de produção
    //Apresentação - indicadores de producao
    cy.get(":nth-child(1) > .e1szbxhy3 > :nth-child(1)").type("2"); //preenche o campo Artigo completo publicado, aceito ou submetido em periódicos científicos especializados com corpo editorial

    cy.get(
      ":nth-child(2) > .MuiTable-root > .MuiTableBody-root > :nth-child(4) > .e1szbxhy4 > .MuiFormControl-root"
    ).type("1"); //preenche o campo composicao musical
    cy.get(
      ":nth-child(3) > .MuiTable-root > .MuiTableBody-root > :nth-child(6) > .e1szbxhy4 > .MuiFormControl-root"
    ).type("1"); //preenche o campo maquete
    cy.get('[data-cy="next-button"]').click();

    //Atividades
    /*cy.get('[data-cy="atividades"]').click(); //Clica no botão de adicionar para selecionar Atividades
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
    cy.get('[data-cy="propostaAtividade.0.membroResponsavelId"]').click(); //clica no campo de resposável
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Grupo 11 Pesquisador') // Encontra o item que contém o texto
    .click(); // Clica nele*/
    cy.get('[data-cy="next-button"]').click();
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //termo de aceite
    cy.get('[data-cy="termoDeAceiteAceito"]').check();
    cy.get('[data-cy="menu-salvar"]').click(); //salva as informações do endereço
    cy.get('[data-cy="menu-verificar-penden"]').click(); //Verifica as pendências da proposta
    cy.get('.ex40wuf2 > .MuiButtonBase-root').click(); //Clica no botão "Finalizar" para salvar e sair da área de submissão da proposta
    });
});