export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const strip = (str: string) => str.replace(/^\s+|\s+$/g, '');
