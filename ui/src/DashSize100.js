import React from 'react';

export default function DashSize100(props) {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10" {...props}>
      <g id="DashSize100">
        <rect id="Frame" width={10} height={10} fill="red" opacity={0} />
        <path d="M8.5,6h-7a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Z" />
      </g>
    </svg>
  );
}
