'use client';

import { Button } from '@/components/Buttons/Button';
import { FlexCenter } from '@/components/Flex/FlexCenter';
import { Header } from '@/components/Header';
import { Payment } from '@/components/Pages/Purchase/Payment/Payment';
import { Summary } from '@/components/Pages/Purchase/Summary/Summary';
import { Tickets } from '@/components/Pages/Purchase/Tickets/Tickets';
import { QRCodeWithImage } from '@/components/QRCode';
import { useEvent } from '@/contexts/event/useEvent';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Page() {
  const { event } = useEvent();
  const router = useRouter();

  const receipt = () => {
    router.push(`/evento/${event?.slug}/comprovante`);
  };

  return (
    <main>
      <Header />

      <div className='p-4 md:p-0 flex flex-col gap-4'>
        {/* <Tickets /> */}
        {/* <Summary /> */}
        <Payment />

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
          <FlexCenter>
            <div className='bg-secondary-400 p-4 rounded-lg'>
              <QRCodeWithImage />
            </div>
          </FlexCenter>
        </motion.div>

        <Button className='w-full tracking-wide' onClick={receipt}>
          Pagar Agora
        </Button>
      </div>
    </main>
  );
}
