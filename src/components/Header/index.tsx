'use client';

import WhiteBolt from '@/../public/images/logo/logo-white.svg';
import VioletBolt from '@/../public/images/logo/logo-violet.svg';
import Logo from '@/../public/images/logo/logo-backstage.svg';

import { useMobile } from '@/helpers/mobile';
import Link from 'next/link';

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
    <header className='bg-secondary-500 w-full h-[80px] flex justify-center drop-shadow-md'>
      <Link href='/' className='flex items-center gap-[10px]'>
        {isMobile ? (
          <Image image={Logo} alt='Logo da Backstage' />
        ) : (
          <>
            <Image image={VioletBolt} alt='violeta' />
            <Image image={Logo} alt='Logo da Backstage' />
            <Image image={WhiteBolt} alt='branco' />
          </>
        )}
      </Link>
    </header>
  );
};
