interface Props {
  margin?: string;
  opacity?: string | number;
}

export const Divider = ({ margin = '20px', opacity = 0.2 }: Props) => (
  <div
    className='bg-secondary-400'
    style={{
      width: '100%',
      height: '1px',
      marginInline: 'auto',
      marginBlock: margin,
      opacity: opacity,
    }}
  />
);
