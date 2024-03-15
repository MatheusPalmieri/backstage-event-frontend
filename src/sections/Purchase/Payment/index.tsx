import { Flex } from '@/components/Flex/Flex';
import { PurchasePaymentMethod } from './Method';
import { PurchasePaymentBuyerInformation } from './BuyerInformation';

interface Props {
  register: any;
}

export const PurchasePayment = ({ register }: Props) => {
  return (
    <Flex className='flex-col gap-8'>
      <PurchasePaymentMethod />

      <PurchasePaymentBuyerInformation register={register} />
    </Flex>
  );
};
