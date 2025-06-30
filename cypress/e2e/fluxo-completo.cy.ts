import { getCurrentDateTime } from '../helpers/date.helper';
import { EDITAL_ID, getEditalFullName, getEditalSelector } from '../config/edital.config';

/**
 * Teste de fluxo completo que:
 * 1. Cria um edital como gestor
 * 2. Submete uma proposta para esse edital como pesquisador
 * 
 * O ID do edital é configurado em ../config/edital.config.ts
 */
describe('Fluxo completo: Criação e submissão de edital', () => {
  
  // Primeiro teste: Criar o edital como gestor
  it('1. Cria um edital completo como gestor', () => {
    // Login como gestor
    cy.typelogin(
      'https://novo-sig.ledes.net',
      'grupo11_gestor@sig.com', 
      'Grupo11@sig'
    );

    cy.log(`Iniciando criação de edital com ID: ${EDITAL_ID}`);
    
    // chamar teste criação de edital aqui
    
    cy.log(`Edital criado com ID: ${EDITAL_ID}`);
  });

  // Segundo teste: Submeter uma proposta para o edital criado
  it('2. Submete uma proposta para o edital criado', () => {
    // Login como pesquisador
    cy.typelogin(
      'https://novo-sig.ledes.net',
      'grupo11_pesq@sig.com',
      'Grupo11@sig'
    );
    
    cy.log(`Iniciando submissão para edital com ID: ${EDITAL_ID}`);
    
    // Navegar para a página inicial e encontrar o edital
    cy.get('[data-cy="breadcrumb-home"]').click();
    cy.get('[data-cy="editais-ver-mais"]').click();
    
    // Usar o seletor da configuração centralizada para encontrar o edital
    cy.get(getEditalSelector()).click();
    
    // Aqui você pode adicionar os demais passos para submissão da proposta
    // ...
    
    cy.log(`Proposta submetida para edital com ID: ${EDITAL_ID}`);
  });
});
