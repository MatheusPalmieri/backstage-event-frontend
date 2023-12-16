import { Icon } from '@tabler/icons-react';

interface TitleIcon extends React.HTMLAttributes<HTMLHeadingElement> {
  Icon: Icon;
  children: React.ReactNode;
}

export const TitleIcon = ({ Icon, children, ...props }: TitleIcon) => (
  <h3
    className='flex items-center gap-2 text-xl font-bold tracking-wider'
    style={{ marginBottom: '10px' }}
    {...props}
  >
    <Icon />

    {children}
  </h3>
);
