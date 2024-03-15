import { Icon } from '@tabler/icons-react';
import { FlexCenter } from '../Flex/FlexCenter';
import { PaymentMethod } from '@/interfaces/payment';

const Check = ({ check }: { check: boolean }) => {
  return (
    <FlexCenter
      className={`w-[20px] h-[20px] rounded-full border-2 ${
        check ? 'border-secondary-50' : 'border-secondary-200'
      }`}
    >
      {check && (
        <div className={`w-[10px] h-[10px] rounded-full bg-secondary-50`}></div>
      )}
    </FlexCenter>
  );
};

interface Props {
  group: string;
  method: PaymentMethod;
  Icon: Icon;
  name: string;
  checked?: boolean;
  checkedMethod: PaymentMethod;
  setMethod: (method: PaymentMethod) => void;
}

export const Input = ({
  group,
  method,
  Icon,
  name,
  checked = false,
  checkedMethod,
  setMethod,
}: Props) => {
  return (
    <>
      <input
        type='radio'
        name={group}
        id={method}
        defaultChecked={checked}
        onChange={() => setMethod(method)}
        className='hidden'
      />
      <label htmlFor={method}>
        <FlexCenter
          className={`w-full h-[50px]  justify-between p-4 rounded-lg cursor-pointer ${
            checkedMethod === method ? 'bg-primary-400' : 'bg-secondary-400'
          } hover:bg-secondary-300`}
          style={{ transition: 'all 0.3s' }}
        >
          <Icon size='30px' />
          <p className='font-mediums tracking-wide'>{name}</p>
          <Check check={checkedMethod === method} />
        </FlexCenter>
      </label>
    </>
  );
};
