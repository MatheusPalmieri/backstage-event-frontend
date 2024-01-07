interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = ({ children, ...props }: ContainerProps) => (
  <div className='container mx-auto p-4 md:p-0' {...props}>
    {children}
  </div>
);
