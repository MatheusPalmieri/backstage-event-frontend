import * as yup from 'yup';

const buyerInformationSchema = yup.object({
  cpf: yup
    .string()
    .required('Preencha o CPF.')
    .test('cpf', 'CPF Inválido', (val = '') => val.length == 14),
  number: yup
    .string()
    .required('Preencha o número.')
    .test(
      'number',
      'Preencha o número',
      (val = '') => val.length >= 1 && val.length <= 15,
    )
    .test('number', 'Número Inválido', (val = '') => val.length == 16),
});

export interface BuyerInformation
  extends yup.InferType<typeof buyerInformationSchema> {
  cpf: string;
  number: string;
}
