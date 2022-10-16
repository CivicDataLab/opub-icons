import React from 'react'

export function MultipleCheck(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14.5,1h-5a.5.5,0,0,0-.5.5V4h2a1,1,0,0,1,1,1V7h2.5a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,14.5,1Z" />
			<rect height={6} rx="0.5" width={6} x={1} y={9} />
			<path d="M8,9v1.746a6.17548,6.17548,0,0,1,3-2.8665V5.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5V8H7A1,1,0,0,1,8,9Z" />
			<path d="M13.55,9.1A4.45,4.45,0,1,0,18,13.55,4.45,4.45,0,0,0,13.55,9.1Zm-1.169,7.156-2.064-2.064a.25.25,0,0,1,0-.3535l.518-.518a.25.25,0,0,1,.3535,0L12.554,14.686l3.053-3.053a.25.25,0,0,1,.3535,0l.5215.5215a.25.25,0,0,1,0,.3535l-3.75,3.75A.25.25,0,0,1,12.381,16.256Z" />
		</svg>
	)
}
