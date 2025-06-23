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
    cy.get('MuiInputBase-root').click().realType('E.M.');
    });
});