'use client';

import { ReactNode, useState } from 'react';
import { Header } from './Header';
import { Icon } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';

interface AccordionProps {
  children: ReactNode;
  className?: string;
  header: {
    Icon: Icon;
    text: string;
  };
}

export const Accordion = ({
  children,
  className,
  header: { Icon, text },
}: AccordionProps) => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <div
      className={`bg-secondary-50 rounded-[20px] overflow-hidden ${className}`}
    >
      <Header Icon={Icon} text={text} show={show} setShow={setShow} />

      <AnimatePresence>
        {show && (
          <motion.div
            layout
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{
              height: 0,
              transition: {
                duration: 0.3,
                type: 'spring',
                stiffness: 500,
                damping: 30,
              },
            }}
            style={{ overflow: 'hidden' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
