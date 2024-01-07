import { Flex } from '@/components/Flex/Flex';
import { InputFloating } from '@/components/Inputs/InputFloating';
import { TitleIcon } from '@/components/Titles/TitleIcon';
import { formatCPF, formatPhoneNumber } from '@/helpers/format';
import { IconId } from '@tabler/icons-react';

export const BuyerInformation = () => {
  return (
    <Flex className='flex-col gap-4'>
      <TitleIcon Icon={IconId}>Informações do comprador</TitleIcon>

      <InputFloating label='C.P.F.' format={formatCPF} />
      <InputFloating type='tel' label='Número' format={formatPhoneNumber} />
    </Flex>
  );
};
