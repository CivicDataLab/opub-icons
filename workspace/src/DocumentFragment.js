import React from 'react'

export function DocumentFragment(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx="7.428" cy="6.75" r={1} />
			<path d="M17.5,2H.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h17a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,17.5,2ZM2,4h8v6.347a4.26743,4.26743,0,0,0-1.739-.5625c-.8265,0-1.2,1.1-2.026,1.1S4.767,8.708,3.941,8.708C3.1895,8.706,2,10.9095,2,10.9095ZM16,14H2V13H16Zm0-3H12V10h4Zm0-3H12V7h4Zm0-3H12V4h4Z" />
		</svg>
	)
}
