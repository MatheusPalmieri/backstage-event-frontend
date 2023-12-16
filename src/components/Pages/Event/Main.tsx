'use client';

import { ButtonIcon } from '@/components/Buttons/ButtonIcon';
import { Image } from './Image';
import { IconCalendarWeek, IconMapPin, IconShare2 } from '@tabler/icons-react';
import { TextIcon } from '@/components/Texts/TextIcon';
import { Title } from '@/components/Titles/Title';

interface MainProps {
  image: {
    url: string | null;
    alt: string;
  };
  name: string;
}

export const Main = ({ image, name }: MainProps) => {
  const { url, alt } = image;

  const share = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: name,
          text: 'Se prepara paro o melhor evento do ano na BACKSTAGE!',
          url: window.location.href,
        })
        .catch((error) => console.error('Error sharing', error));
    } else {
      console.warn('navigator.share is not supported in this environment');
    }
  };

  return (
    <section className='bg-secondary-525' style={{ marginBottom: '25px' }}>
      <article>
        <Image url={url} alt={alt} />

        <ButtonIcon
          LeftIcon={IconShare2}
          style={{ position: 'relative', top: '-25px', marginInline: 'auto' }}
          action={share}
        >
          Compartilhar
        </ButtonIcon>
      </article>

      <article className='p-4'>
        <Title style={{ marginBottom: '25px' }}>{name}</Title>

        <TextIcon Icon={IconCalendarWeek} style={{ marginBottom: '10px' }}>
          23 dez - 2023 • 23:00 &gt; 24 dez - 2023 • 08:00
        </TextIcon>

        <TextIcon Icon={IconMapPin}>
          We Are Reino, Balneário Camboriú - SC
        </TextIcon>
      </article>
    </section>
  );
};
