import { Icon } from '@tabler/icons-react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  Icon: Icon;
  children: React.ReactNode;
}

export const TextIcon = ({ Icon, children, ...props }: Props) => {
  return (
    <div className='flex items-center gap-2 text-secondary-200' {...props}>
      <Icon size={24} />

      <p className='text-sm'>{children}</p>
    </div>
  );
};
