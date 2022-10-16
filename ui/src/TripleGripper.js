import React from 'react';

export default function TripleGripper(props) {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" {...props}>
      <g id="TripleGripper">
        <rect id="Frame" width={10} height={8} fill="red" opacity={0} />
        <path d="M9.4502,1H.5498a.5.5,0,0,1,0-1H9.4502a.5.5,0,0,1,0,1Z" />
        <path d="M9.4502,4H.5498a.5.5,0,0,1,0-1H9.4502a.5.5,0,0,1,0,1Z" />
        <path d="M9.4502,7H.5498a.5.5,0,0,1,0-1H9.4502a.5.5,0,0,1,0,1Z" />
      </g>
    </svg>
  );
}
