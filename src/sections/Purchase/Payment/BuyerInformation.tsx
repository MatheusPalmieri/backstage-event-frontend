import { Flex } from '@/components/Flex/Flex';
import { InputFloating } from '@/components/Inputs/InputFloating';
import { TitleIcon } from '@/components/Titles/TitleIcon';
import { formatCPF, formatPhoneNumber } from '@/helpers/format';
import { BuyerInformation as BuyerInformationSchema } from '@/schemas/BuyerInformation';
import { IconId } from '@tabler/icons-react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  register: any;
}

export const PurchasePaymentBuyerInformation = ({ register }: Props) => {
  return (
    <Flex className='flex-col gap-4'>
      <TitleIcon Icon={IconId}>Informações do comprador</TitleIcon>

      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form>
        <InputFloating label='C.P.F.' format={formatCPF} />
        <InputFloating type='tel' label='Número' format={formatPhoneNumber} />
      </form>
    </Flex>
  );
};
