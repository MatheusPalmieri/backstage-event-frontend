import QRCode from 'qrcode.react';
import WhiteBolt from '@/../public/images/logo/logo-white.svg';

export const QRCodeWithImage = () => (
  <QRCode
    value='https://www.example.com'
    bgColor='#555555'
    fgColor='#FFFFFF'
    size={300}
    imageSettings={{
      src: String(WhiteBolt.src),
      width: 60,
      height: 60,
      excavate: true,
    }}
    style={{ borderRadius: 5 }}
  />
);
