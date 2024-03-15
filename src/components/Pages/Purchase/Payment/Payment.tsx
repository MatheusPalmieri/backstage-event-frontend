import { Flex } from '@/components/Flex/Flex';
import { FormPayment } from './FormPayment';
import { BuyerInformation } from './BuyerInformation';

interface PaymentProps {
  register: any;
}

export const Payment = ({ register }: PaymentProps) => {
  return (
    <Flex className='flex-col gap-8'>
      <FormPayment />

      <BuyerInformation register={register} />
    </Flex>
  );
};
