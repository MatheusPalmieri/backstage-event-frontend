export const formatCurrency = (currency: number) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(currency ?? 0);
};

export const formatCPF = (value: string): string => {
  const onlyNumbers = value.replace(/[^\d]/g, '');
  return onlyNumbers
    .slice(0, 11)
    .replace(
      /(\d{3})(\d{0,3})(\d{0,3})(\d{0,2})/,
      (_, p1, p2, p3, p4) =>
        p1 + (p2 ? `.${p2}` : '') + (p3 ? `.${p3}` : '') + (p4 ? `-${p4}` : ''),
    );
};

export const formatPhoneNumber = (value: string): string => {
  const onlyNumbers = value.replace(/\D/g, '');

  if (onlyNumbers.length <= 2) {
    return `(${onlyNumbers}`;
  } else if (onlyNumbers.length <= 3) {
    return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
  } else if (onlyNumbers.length <= 7) {
    return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(
      2,
      3,
    )} ${onlyNumbers.slice(3)}`;
  } else {
    return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(
      2,
      3,
    )} ${onlyNumbers.slice(3, 7)}-${onlyNumbers.slice(7, 11)}`;
  }
};
