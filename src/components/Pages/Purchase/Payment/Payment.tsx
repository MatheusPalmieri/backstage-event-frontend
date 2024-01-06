import { Flex } from '@/components/Flex/Flex';
import { FormPayment } from './FormPayment';
import { TitleIcon } from '@/components/Titles/TitleIcon';
import { IconId } from '@tabler/icons-react';
import { InputFloating } from '@/components/Inputs/InputFloating';

export const Payment = () => {
  return (
    <Flex className='flex-col gap-8'>
      {/* <FormPayment /> */}

      <Flex className='flex-col gap-4'>
        <TitleIcon Icon={IconId}>Informações do comprador</TitleIcon>

        <InputFloating type='number' label='CPF' />
      </Flex>
    </Flex>
  );
};
