import React from 'react';

export default function DoubleGripper(props) {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width={16} height={4} viewBox="0 0 16 4" {...props}>
      <g id="DoubleGripper">
        <rect id="Frame" width={16} height={4} fill="red" opacity={0} />
        <path d="M15.4502,1H.5498a.5.5,0,0,1,0-1H15.4502a.5.5,0,0,1,0,1Z" />
        <path d="M15.4502,4H.5498a.5.5,0,0,1,0-1H15.4502a.5.5,0,1,1,0,1Z" />
      </g>
    </svg>
  );
}
