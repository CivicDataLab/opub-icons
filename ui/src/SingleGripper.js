import React from 'react';

export default function SingleGripper(props) {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width={24} height={4} viewBox="0 0 24 4" {...props}>
      <g id="SingleGripper">
        <rect id="Frame" width={24} height={4} fill="red" opacity={0} />
        <path d="M23,3H1A1,1,0,0,1,1,1H23a1,1,0,0,1,0,2Z" />
      </g>
    </svg>
  );
}
