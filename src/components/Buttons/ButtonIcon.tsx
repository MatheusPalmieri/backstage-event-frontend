import { Icon } from '@tabler/icons-react';
import { ReactNode } from 'react';

const IconComponent = ({ Icon }: { Icon: Icon }) => <Icon size={30} />;

interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  w?: string | number;
  h?: string | number;
  LeftIcon?: Icon;
  RightIcon?: Icon;
  action?: () => void;
}

export const ButtonIcon = ({
  children,
  w = '200px',
  h = '50px',
  LeftIcon,
  RightIcon,
  action,
  ...props
}: ButtonIconProps) => {
  return (
    <button
      className='button-icon-backstage bg-primary-500 flex items-center justify-center gap-2 text-white font-bold rounded-lg px-4 py-2 transition duration-300 hover:bg-primary-600'
      onClick={() => action && action()}
      {...props}
    >
      <span>{LeftIcon && <IconComponent Icon={LeftIcon} />}</span>

      <p className='tracking-wide'>{children}</p>

      <span>{RightIcon && <IconComponent Icon={RightIcon} />}</span>
    </button>
  );
};
