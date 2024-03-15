import { PaymentMethod } from '@/interfaces/payment';

import { Flex } from '@/components/Flex/Flex';
import { FlexCenter } from '@/components/Flex/FlexCenter';
import { TitleIcon } from '@/components/Titles/TitleIcon';
import { IconQrcode } from '@tabler/icons-react';
import { PurchasePaymentPix } from './Pix';

interface Props {
  paymentMethod: PaymentMethod;
}

export const PurchasePaymentResult = ({ paymentMethod }: Props) => {
  return (
    <Flex className='flex-col'>
      <TitleIcon Icon={IconQrcode}>
        Pagamento via{' '}
        {paymentMethod === PaymentMethod.Pix ? 'Pix' : 'Cartão de Crédito'}!
      </TitleIcon>

      {paymentMethod === PaymentMethod.Pix ? (
        <FlexCenter>
          <PurchasePaymentPix value='00020126330014br.gov.bcb.pix01111335366962052040000530398654040.805802BR5919NOME6014CIDADE62580520LKH2021102118215467250300017br.gov.bcb.brcode01051.0.063044D24' />
        </FlexCenter>
      ) : (
        'credito'
      )}
    </Flex>
  );
};
