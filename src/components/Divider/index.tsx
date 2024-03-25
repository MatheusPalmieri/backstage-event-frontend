interface Props {
  margin?: string;
  opacity?: string | number;
}

export const Divider = ({ margin = '20px', opacity = 0.2 }: Props) => (
  <div
    className='w-full h-[1px] bg-secondary-400 mx-auto rounded-lg'
    style={{
      marginBlock: margin,
      opacity: opacity,
    }}
  />
);
