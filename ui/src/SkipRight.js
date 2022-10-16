import React from 'react';

export default function SkipRight(props) {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height={10} viewBox="0 0 9 10" width={9} {...props}>
      <title>SkipRight</title>
      <rect id="ToDelete" fill="#ff13dc" opacity={0} width={9} height={10} />
      <g>
        <path d="M8,.01a1,1,0,0,0-1,1V8.99a1,1,0,1,0,2,0V1.01A1,1,0,0,0,8,.01Z" />
        <path d="M6,5a.99679.99679,0,0,0-.29327-.70734L1.71734.30327A.9999.9999,0,1,0,.30327,1.71734L3.58594,5,.30327,8.28266A.9999.9999,0,1,0,1.71734,9.69673L5.70673,5.70734A.99669.99669,0,0,0,6,5Z" />
      </g>
    </svg>
  );
}
