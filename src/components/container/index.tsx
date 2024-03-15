interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = ({ children, ...props }: Props) => (
  <div className='container mx-auto p-4 md:p-0' {...props}>
    {children}
  </div>
);
