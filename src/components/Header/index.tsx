'use client';

import WhiteBolt from '@/../public/images/logo/logo-white.svg';
import VioletBolt from '@/../public/images/logo/logo-violet.svg';
import Logo from '@/../public/images/logo/logo-backstage.svg';

import { useMobile } from '@/helpers/useMobile';

const Image = ({
  image,
  alt,
  color,
}: {
  image: any;
  alt?: string;
  color?: string;
}) => (
  <img
    src={String(image.src)}
    alt={alt ?? `Raio ${color} simbolizando a logo da Backstage.`}
  />
);

export const Header = () => {
  const isMobile = useMobile();

  return (
    <header
      className='bg-secondary-500 w-full flex justify-center drop-shadow-md'
      style={{ height: '80px' }}
    >
      {isMobile ? (
        <div className='flex'>
          <Image image={WhiteBolt} alt='branco' />

          <Image image={VioletBolt} alt='violeta' />
        </div>
      ) : (
        <div className='flex items-center'>
          <Image image={Logo} alt='Logo da Backstage' />
        </div>
      )}
    </header>
  );
};
