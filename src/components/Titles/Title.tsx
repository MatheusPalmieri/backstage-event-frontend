interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Title = ({ children, ...props }: Props) => (
  <h2 className='text-3xl font-bold tracking-wider' {...props}>
    {children}
  </h2>
);
