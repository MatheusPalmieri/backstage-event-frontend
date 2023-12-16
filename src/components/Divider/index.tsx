interface DividerProps {
  margin?: boolean;
}

export const Divider = ({ margin = false }: DividerProps) => (
  <div
    className='bg-secondary-400 opacity-20'
    style={{
      width: '100%',
      height: '1px',
      marginInline: 'auto',
      marginBlock: margin ? '5px' : '20px',
    }}
  />
);
