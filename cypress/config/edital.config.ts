/**
 * Arquivo de configuração central para valores compartilhados entre testes
 */

/**
 * ID do edital no formato de três dígitos (000-999)
 * Este valor é usado em todos os testes que precisam referenciar o mesmo edital
 * Altere apenas este valor para mudar o ID em todos os testes
 */
export const EDITAL_ID = '017';
const NAME_EXECUTOR = 'Kauan-Cardoso'; // Nome do executor do edital
/**
 * Funções auxiliares para manipulação de IDs
 */

/**
 * Formata um número para um ID de três dígitos
 * 
 * @param num - Número a ser formatado
 * @returns String formatada com três dígitos (ex: '042')
 */
export function formatThreeDigitId(num: number): string {
  return num.toString().padStart(3, '0');
}

/**
 * Gera o nome completo do edital usando o ID configurado
 * 
 * @returns Nome completo do edital
 */
export function getEditalFullName(): string {
  return `Grupo-11 E.M. ${EDITAL_ID}/2025 ${NAME_EXECUTOR}`;
}


