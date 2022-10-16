import React from 'react';

export default function Magnifier(props) {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height={16} viewBox="0 0 16 16" width={16} {...props}>
      <title>Magnifier</title>
      <rect id="ToDelete" fill="#ff13dc" opacity={0} width={16} height={16} />
      <path d="M15.77,14.70942l-4.53431-4.53431a6.01393,6.01393,0,1,0-1.06055,1.06055L14.70942,15.77A.74992.74992,0,1,0,15.77,14.70942ZM6.5,11A4.5,4.5,0,1,1,11,6.5,4.50508,4.50508,0,0,1,6.5,11Z" />
    </svg>
  );
}
