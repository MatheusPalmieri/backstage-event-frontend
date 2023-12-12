import type { Metadata } from 'next';
import '@/globals/css/globals.css';
import { quicksand } from '../../public/fonts/fonts';

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
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
