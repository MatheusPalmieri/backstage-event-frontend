import type { Metadata } from 'next';
import '@/globals/css/globals.css';
import { quicksand } from '../../public/fonts/fonts';
import { EventProvider } from '@/contexts/event/useEvent';
import { TicketProvider } from '@/contexts/ticket/useTicket';

export const metadata: Metadata = {
  title: 'BACKSTAGE',
  description: 'Se prepara paro o melhor evento do ano na BACKSTAGE!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={quicksand.className}>
        <EventProvider>
          <TicketProvider>{children}</TicketProvider>
        </EventProvider>
      </body>
    </html>
  );
}
