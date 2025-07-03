export interface DateTimeOptions {
  addSeconds?: number;
  addMinutes?: number;
  addHours?: number;
  addDays?: number;
  addMonths?: number;
  addYears?: number;
}

export const getCurrentDateTime = ({
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears,
}: DateTimeOptions = {}): string => {
  const now = new Date();
  if (addSeconds) now.setSeconds(now.getSeconds() + addSeconds);
  if (addMinutes) now.setMinutes(now.getMinutes() + addMinutes);
  if (addHours) now.setHours(now.getHours() + addHours);
  if (addDays) now.setDate(now.getDate() + addDays);
  if (addMonths) now.setMonth(now.getMonth() + addMonths);
  if (addYears) now.setFullYear(now.getFullYear() + addYears);
  const date = now.toLocaleDateString('pt-BR'); // "08/05/2025"
  const time = now.toLocaleTimeString('pt-BR', { hour12: false }); // "16:30:09"
  const [hh, mm, ss] = time.split(':');
  return `${date} ${mm}.${ss}.${hh}`;
};

/**
 * Retorna a data atual ou data ajustada no formato DDMMYYYY
 * Útil para campos de formulários que exigem data nesse formato específico
 * 
 * @param options - Opções para ajustar a data (adicionar dias, meses, etc.)
 * @returns String no formato "DDMMYYYY"
 */
export const getDateDDMMYYYY = (options: DateTimeOptions = {}): string => {
  const now = new Date();
  if (options.addSeconds) now.setSeconds(now.getSeconds() + options.addSeconds);
  if (options.addMinutes) now.setMinutes(now.getMinutes() + options.addMinutes);
  if (options.addHours) now.setHours(now.getHours() + options.addHours);
  if (options.addDays) now.setDate(now.getDate() + options.addDays);
  if (options.addMonths) now.setMonth(now.getMonth() + options.addMonths);
  if (options.addYears) now.setFullYear(now.getFullYear() + options.addYears);
  
  // Formata como DDMMYYYY
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // +1 porque mês começa do 0
  const year = String(now.getFullYear());
  
  return `${day}${month}${year}`;
};
