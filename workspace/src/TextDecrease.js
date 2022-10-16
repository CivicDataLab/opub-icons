import React from 'react'

export function TextDecrease(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.95,13.5a4.45,4.45,0,1,0-4.45,4.45,4.45,4.45,0,0,0,4.45-4.45Zm-1.9315-1.0855-2.307,3.65a.25.25,0,0,1-.4225,0l-2.307-3.65A.25.25,0,0,1,11.17,12h4.6605a.25.25,0,0,1,.188.4145Z" />
			<path d="M8,13.55V4h4V5.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5H.5a.5.5,0,0,0-.5.5v3A.5.5,0,0,0,.5,6h1A.5.5,0,0,0,2,5.5V4H6V14H4.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H8.586A5.41,5.41,0,0,1,8,13.55Z" />
		</svg>
	)
}
