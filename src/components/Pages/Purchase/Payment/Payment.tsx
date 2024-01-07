import { Flex } from '@/components/Flex/Flex';
import { FormPayment } from './FormPayment';
import { BuyerInformation } from './BuyerInformation';

export const Payment = () => {
  return (
    <Flex className='flex-col gap-8'>
      <FormPayment />

      <BuyerInformation />
    </Flex>
  );
};
