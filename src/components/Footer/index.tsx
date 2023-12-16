'use client';

import WhiteBolt from '@/../public/images/logo/logo-white.svg';
import VioletBolt from '@/../public/images/logo/logo-violet.svg';
import Logo from '@/../public/images/logo/logo-backstage.svg';
import { useMobile } from '@/helpers/useMobile';

export const Footer = () => {
  const isMobile = useMobile();

  return (
    <footer
      className='bg-secondary-500 px-4 py-16 shadow-inner'
      style={{ marginTop: '25px' }}
    >
      <div className='w-full flex justify-center gap-2 overflow-hidden'>
        <img
          src={String(VioletBolt.src)}
          alt='Raio violeta representando a logo da empresa Backstage'
        />

        <img
          src={String(Logo.src)}
          alt='Logo com nome da empresa Backstage'
          width={isMobile ? '55%' : '100%'}
        />

        <img
          src={String(WhiteBolt.src)}
          alt='Raio branco representando a logo da empresa Backstage'
        />
      </div>
    </footer>
  );
};
