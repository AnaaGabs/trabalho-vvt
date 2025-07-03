import { getCurrentDateTime, getDateDDMMYYYY } from '../helpers/date.helper';
import { EDITAL_ID, getEditalFullName } from '../config/edital.config';
import 'cypress-file-upload';

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
  it.only('Realiza login no sistema e submete uma proposta de edital completocy', () => { //executa apenas o teste de submissão de proposta médio
    cy.get('[data-cy="breadcrumb-home"]').click(); //Vai para a página inicial
    cy.get('[data-cy="editais-ver-mais"]').click(); //Clica para ver mais editais

    cy.get('.MuiPaper-root').click(); // Usa o seletor da configuração centralizada para encontrar o edital
    cy.get('.MuiPaper-root').type(getEditalFullName()); // Digita o seletor do edital para garantir que o Cypress encontre o elemento correto
    // Log para facilitar a identificação do ID usado no teste
    cy.log(`Buscando edital com ID: ${EDITAL_ID}`);
    cy.get('.e1w0rc4q2 > .MuiButtonBase-root').first().click(); //Clica no botão para ver o edital específico

    cy.wait(300); //Aguarda 300ms para garantir que a página foi carregada completamente
    cy.get('[data-cy="criar-proposta"]').should('be.visible').click(); //Clica no botão "Criar Proposta" para iniciar o processo de criação de uma nova proposta
    cy.get('[data-cy="tituloDoProjeto"]').should('be.visible').type(
        'Submissão de Proposta - Edital Completo', //Preenche o campo "Título do Projeto" com o valor "Submissão de Proposta de Teste"
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
    /*
    // cy.get('[data-cy="areaDeConhecimento-adicionar"]').click(); //Clica no botão de adicionar para selecionar Área de Conhecimento
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
    */
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa
    
    //Informações complementares
    cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-27"]').click(); //Clica no campo de pergunta 27
    cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-27"]').type("Esta é uma proposta de teste para o edital completo.", { delay: 0 }); //Preenche o campo de pergunta 27 com um texto de exemplo

    cy.wait(300); //Aguarda 300ms para garantir que a página foi carregada completamente
    //cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-25-item-smart-city"]').check(); //Marca a opção "Smart City" na pergunta 25
    cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-25-item-smart-city"] > .MuiButtonBase-root > .PrivateSwitchBase-input').click(); //Marca a opção "Smart City" na pergunta 25    

    
    //cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-24-item-mei-faturamento"]').check(); //Marca a opção "MEI - Faturamento" na pergunta 24
    cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-24-item-mei-faturamento"] > .MuiListItemIcon-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click(); //Marca a opção "MEI - Faturamento" na pergunta 24    

    //cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-23-item-ods04-garantir-o"]').check(); //Marca a opção "ODS04 - Garantir o acesso à educação inclusiva, equitativa e de qualidade" na pergunta 23
    cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-23-item-ods04-garantir-o"] > .MuiListItemIcon-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click(); //Marca a opção "ODS04 - Garantir o acesso à educação inclusiva, equitativa e de qualidade" na pergunta 23   
      
    
       //data
    cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-26"]').type(
      getDateDDMMYYYY({addDays: 14}),
      { delay: 0 }
    ); //Preenche o campo de pergunta 26 com a data atual formatada DDMMYYYY (ex: 16072025)

    //cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa
    cy.get('[data-cy="abrangencia"]').click(); //Clica no botão de Abrangência para expandir a seção    
    
    //Abrangência
    cy.get('[data-cy="abrangencia-adicionar"]').click(); //Clica no botão adicionar para selecionar Abrangência
    cy.get('[data-cy="abrangencia.0.estadoId"]').click(); //Clica no campo para selecionar o Estado
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Paraná') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="abrangencia.0.abrangenciaMunicipio"]').click(); //Clica no campo para selecionar o município
    
    cy.get('[data-cy="abrangencia.0.abrangenciaMunicipio"]').click(); //Clica no campo para selecionar o município
    cy.get('[data-cy="abrangencia.0.abrangenciaMunicipio"]').type('Maringa', { delay: 0 }); //Preenche o campo de município com o nome "Maringa"
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
     /*
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
     */
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //dados profissionais
    cy.get('[data-cy="dados-profissionais"]').click(); //Clica no botão de adicionar para selecionar Dados Profissionais
    cy.get('[data-cy="criadoPor.possuiVinculoInstitucional"]').check(); //seleciona o campo "Possuo Vínculo Institucional"
    cy.get('[data-cy="criadoPor.vinculoInstitucional.tipoVinculoInstitucionalId"]').click();
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Bolsista') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    // Apresentação ********
    //Descricao
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-5"]').click(); //Clica no campo de pergunta 5
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-5"]').type(
        'Texto para teste.', //Preenche o campo de pergunta com um texto de exemplo
        { delay: 0 },
    )
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-9"]').click(); //Clica no campo de pergunta 9
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-9"]').type(
        'Texto para teste.', //Preenche o campo de pergunta com um texto de exemplo
        { delay: 0 },
    )
  
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-11"]').click(); //Clica no campo de pergunta 5
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-11"]').type(
        'Texto para teste.', //Preenche o campo de pergunta com um texto de exemplo
        { delay: 0 },
    )
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-12"]').click(); //Clica no campo de pergunta 9
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-12"]').type(
        'Texto para teste.', //Preenche o campo de pergunta com um texto de exemplo
        { delay: 0 },
    )
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-13"]').click(); //Clica no campo de pergunta 9
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-13"]').type(
        'Texto para teste.', //Preenche o campo de pergunta com um texto de exemplo
        { delay: 0 },
    )
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //indicadores de produção
    cy.get('#mui-80'); // Espera o editor carregar
    cy.get('#mui-80').clear().realType('1', { delay: 0 }); // Insere o texto com realType
    cy.get('#mui-85'); // Espera o editor carregar
    cy.get('#mui-85').clear().realType('1', { delay: 0 }); // Insere o texto com realType
    cy.get('#mui-86'); // Espera o editor carregar
    cy.get('#mui-86').clear().realType('1', { delay: 0 }); // Insere o texto com realType
   
    cy.get('#mui-91'); // Espera o editor carregar
    cy.get('#mui-91').clear().realType('1', { delay: 0 }); // Insere o texto com realType
    cy.get('#mui-92'); // Espera o editor carregar
    cy.get('#mui-92').clear().realType('1', { delay: 0 }); // Insere o texto com realType
   
    cy.get('#mui-119'); // Espera o editor carregar
    cy.get('#mui-119').clear().realType('1', { delay: 0 }); // Insere o texto com realType
   
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    //Atividades
    /**
    * Não possui responsaveis para selecionar, por isso não é possível preencher os campos de atividade
    
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
    .click(); // Clica nele
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa
    */
    
    //Orçamento
    cy.get('[data-cy="orcamento"]').click(); //Clica no botão de Orçamento
    cy.get('[data-cy="faixa-de-financiamento"]').click(); //Clica no botão de faixa de financiamento 
    cy.get('[data-cy="faixaFinanciamentoId"]').click(); //Clica no campo de faixa de financiamento
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('Faixa A') // Encontra o item que contém o texto
    .click(); // Clica nele
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa


    // Bolsa
    /**
     *  Não é possivel preencher o campo valor total
     * 
    cy.get('[data-cy="add-bolsas"]').click(); //Clica no botão de adicionar para selecionar Bolsa
    cy.get('[data-cy="rubricaBolsaUnsaved.modalidadeBolsaId"]')
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .contains('AT')
    .click(); // Clica nele
    cy.get('[data-cy="rubricaBolsaUnsaved.nivelBolsaId"]').click(); //Clica no campo de nível de bolsa
    cy.get('ul[role="listbox"] li') // Seleciona todos os
    .first() // Seleciona o primeiro item da lista de opções (listbox)
    .click(); // Clica nele
    cy.get('[data-cy="rubricaBolsaUnsaved.quantidade"]').click(); //Clica no campo de quantidade
    cy.get('[data-cy="rubricaBolsaUnsaved.quantidade"]').type('1', { delay: 0 }); //Preenche o campo de quantidade com o valor 1
    cy.get('[data-cy="rubricaBolsaUnsaved.duracao"]').click(); //Clica no campo de duração
    cy.get('ul[role="listbox"] li') // Seleciona todos os itens da lista de opções (listbox)
    .first() // Seleciona o primeiro item da lista de opções (listbox)
    .click(); // Clica nele
    
    /**
     * Não é possivel preencher o valor total
    cy.get('[data-cy="rubricaBolsaUnsaved.valorTotal"]').click(); //Clica no campo de valor total
    cy.get('[data-cy="rubricaBolsaUnsaved.valorTotal"]').type('1000', { delay: 0 }); //Preenche o campo de valor total com o valor 1000
      
   */

    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa

    // consolidacao
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa
    // Solicitacao a fundacao
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa
    
    //Anexos
    // Documentos pessoais
    cy.get('[data-cy="anexos"]').click();
    //RG
    cy.get('#select-categories').click(); //Clica no campo de seleção de Categorias
    cy.get('[data-cy="documentoPessoalPropostaAnexo-item-rg"]').click(); //Clica no campo de seleção de Documento Pessoal (RG)        
    cy.get('[data-cy="documentoPessoalPropostaAnexo-procure"]').click(); //Clica no botão "Procurar" para selecionar um arquivo
    cy.get('[data-cy="documentoPessoalPropostaAnexo-procure"]').selectFile('cypress/fixtures/teste.pdf');
    //Cpf
    cy.get('#select-categories').click(); //Clica no campo de seleção de Categorias
    cy.get('[data-cy="documentoPessoalPropostaAnexo-item-cpf"]').click(); //Clica no campo de seleção de Documento Pessoal (RG)        
    cy.get('[data-cy="documentoPessoalPropostaAnexo-procure"]').click(); //Clica no botão "Procurar" para selecionar um arquivo
    cy.get('[data-cy="documentoPessoalPropostaAnexo-procure"]').selectFile('cypress/fixtures/teste.pdf');
    //Comprovante de Residência
    cy.get('#select-categories').click(); //Clica no campo de seleção de Categorias
    cy.get('[data-cy="documentoPessoalPropostaAnexo-item-comprovante-de-r"]').click(); //Clica no campo de seleção de Documento Pessoal (RG)        
    cy.get('[data-cy="documentoPessoalPropostaAnexo-procure"]').click(); //Clica no botão "Procurar" para selecionar um arquivo
    cy.get('[data-cy="documentoPessoalPropostaAnexo-procure"]').selectFile('cypress/fixtures/teste.pdf');
    // Passaporte
    cy.get('#select-categories').click(); //Clica no campo de seleção de Categorias
    cy.get('[data-cy="documentoPessoalPropostaAnexo-item-passaporte"]').click(); //Clica no campo de seleção de Documento Pessoal (RG)        
    cy.get('[data-cy="documentoPessoalPropostaAnexo-procure"]').click(); //Clica no botão "Procurar" para selecionar um arquivo
    cy.get('[data-cy="documentoPessoalPropostaAnexo-procure"]').selectFile('cypress/fixtures/teste.pdf');
    //Titulo de Eleitor
    cy.get('#select-categories').click(); //Clica no campo de seleção de Categorias
    cy.get('[data-cy="documentoPessoalPropostaAnexo-item-titulo-de-eleito"]').click(); //Clica no campo de seleção de Documento Pessoal (RG)        
    cy.get('[data-cy="documentoPessoalPropostaAnexo-procure"]').click(); //Clica no botão "Procurar" para selecionar um arquivo
    cy.get('[data-cy="documentoPessoalPropostaAnexo-procure"]').selectFile('cypress/fixtures/teste.pdf');

    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa
    // Documentos da proposta
    // Doc1
    cy.get('#select-categories').click(); //Clica no campo de seleção de Categorias
    cy.get('[data-cy="documentoPropostaAnexo-item-doc1"]').click(); //Clica no campo de seleção de Documento da Proposta (Doc1)

    cy.get('.document-uploader').selectFile('cypress/fixtures/teste.csv', { action: 'drag-drop' }); //Clica no botão "Procurar" para selecionar um arquivo

    // Doc2
    cy.get('#select-categories').click(); //Clica no campo de seleção de Categorias
    cy.get('[data-cy="documentoPropostaAnexo-item-doc2"]').click(); //Clica no campo de seleção de Documento da Proposta (Doc1)

    cy.get('.document-uploader').selectFile('cypress/fixtures/teste.csv', { action: 'drag-drop' }); //Clica no botão "Procurar" para selecionar um arquivo
    cy.get('[data-cy="next-button"]').click(); //Clica no botão "Próximo" para ir para a próxima etapa
 

    //termo de aceite
    cy.get('[data-cy="termoDeAceiteAceito"]').check(); //Clica no checkbox de aceite do termo de aceite


    cy.get('[data-cy="menu-verificar-penden"]').click(); //Clica no botão de verificar pendências para verificar se há pendências na proposta


    cy.get('[data-cy="caracterizacao"]').click(); //Clica no botão de Caracterização para verificar se há pendências na proposta
    cy.get('[data-cy="informacoes-complementares"]').click(); //Clica no botão de Informações Complementares para verificar se há pendências na proposta
    cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-25-item-smart-city"] > .MuiButtonBase-root > .PrivateSwitchBase-input').click(); //Marca a opção "Smart City" na pergunta 25    

    cy.get('[data-cy="menu-verificar-penden"]').click(); //Clica no botão de verificar pendências novamente para verificar se há pendências na proposta
    
    });
});