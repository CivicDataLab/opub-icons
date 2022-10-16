import React from 'react'

export function FlipHorizontal(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={1} rx="0.25" width={1} x={8} y={1} />
			<rect height={1} rx="0.25" width={1} x={8} y={3} />
			<rect height={1} rx="0.25" width={1} x={8} y={5} />
			<rect height={1} rx="0.25" width={1} x={8} y={7} />
			<rect height={1} rx="0.25" width={1} x={8} y={9} />
			<rect height={1} rx="0.25" width={1} x={8} y={11} />
			<rect height={1} rx="0.25" width={1} x={8} y={13} />
			<rect height={1} rx="0.25" width={1} x={8} y={15} />
			<path d="M15.138,14.35,10.1,8.9a.505.505,0,0,1,0-.714L15.138,2.65A.505.505,0,0,1,16,3.006V13.994a.505.505,0,0,1-.862.356Z" />
			<path d="M1.9225,4.0395,6.0065,8.461,1.9225,12.95ZM1.522,2.5a.5045.5045,0,0,0-.50849.50048V13.994a.5045.5045,0,0,0,.503.506l.006,0a.4935.4935,0,0,0,.353-.15l5.036-5.5335a.505.505,0,0,0,0-.714L1.8755,2.65A.49451.49451,0,0,0,1.522,2.5Z" />
		</svg>
	)
}
