import React from 'react';
import QRCode from 'react-qr-code';

const QRDisplay = ({ url, size = 128, fgColor = "#000000", bgColor = "#ffffff" }) => {
  if (!url) return null;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded text-center">  
      <h3 className="text-lg font-bold mb-2">QR Code</h3>
      <QRCode value={url} size={size} fgColor={fgColor} bgColor={bgColor} />
      <p className="mt-2 text-sm">Scan to open</p>
    </div>
  );
};

export default QRDisplay;
// This component is responsible for displaying the QR code for the shortened URL.