import { isBefore } from 'date-fns';

export function isDateValid(dateString: string) {
  const targetDate = new Date(dateString);
  const targetDateInBrazil = new Date(targetDate.toLocaleString('pt-br'));

  if (!(Object.prototype.toString.call(targetDate) === '[object Date]')) {
    return false;
  }

  if (Number.isNaN(targetDate.getTime())) {
    return false;
  }

  if (isBefore(targetDateInBrazil, new Date())) {
    return false;
  }

  return true;
}
