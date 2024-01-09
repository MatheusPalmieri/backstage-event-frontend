'use client';

import { Button } from '@/components/Buttons/Button';
import { FlexCenter } from '@/components/Flex/FlexCenter';
import { QRCodeWithImage } from '@/components/QRCode';
import { Timer } from '@/components/Timer';
import { TitleIcon } from '@/components/Titles/TitleIcon';
import { useEvent } from '@/contexts/event/useEvent';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

const Title = ({ children }: { children: ReactNode }) => (
  <div className='w-full'>
    <TitleIcon>{children}</TitleIcon>
  </div>
);

interface PixProps {
  value: string;
}

export const Pix = ({ value }: PixProps) => {
  const { redirectByExpiration } = useEvent();

  const [copied, setCopied] = useState<boolean>(false);

  const copy = () => {
    setCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{
        height: 0,
        transition: {
          duration: 0.3,
          type: 'spring',
          stiffness: 500,
          damping: 30,
        },
      }}
    >
      <FlexCenter className='bg-secondary-400 flex-col gap-4 p-4 rounded-lg'>
        <Title>Código Pix</Title>

        <input
          type='text'
          readOnly
          defaultValue={value}
          className='w-full px-4 bg-secondary-50 focus:bg-secondary-100 transition duration-300 ease-in-out text-secondary-400 font-bold text-sm rounded-lg'
        />

        <Button
          className='w-full h-[50px] bg-secondary-50 hover:bg-secondary-250 rounded-lg text-secondary-400 text-xl font-bold'
          onClick={copy}
        >
          {copied ? 'Link Copiado' : 'Copiar link'}
        </Button>

        <FlexCenter className='w-full h-[50px] bg-secondary-50 rounded-lg'>
          <Timer
            time={900}
            text='Tempo restante'
            action={redirectByExpiration}
          />
        </FlexCenter>

        <Title>QR Code</Title>
        <QRCodeWithImage value={value} />
      </FlexCenter>
    </motion.div>
  );
};
