import React from 'react'

export function Enterprise(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			data-name="Layer 1"
			id="Layer_1"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15.5,7H11V2.5a.5.5,0,0,0-.5-.5H9V0H8V2H6.5a.5.5,0,0,0-.5.5V6.6L2,9v8H3V9.56616l3-1.8V17h9.5a.5.5,0,0,0,.5-.5v-9A.5.5,0,0,0,15.5,7ZM13,15H12V14h1Zm0-2H12V12h1Zm0-2H12V10h1Zm0-2H12V8h1Zm2,6H14V14h1Zm0-2H14V12h1Zm0-2H14V10h1Zm0-2H14V8h1ZM4,10H5v7H4Z" />
		</svg>
	)
}
