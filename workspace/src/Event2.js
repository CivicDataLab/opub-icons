import React from 'react'

export function Event2(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9.25,5.027A.247.247,0,0,0,9,5.271V17.668a.247.247,0,0,0,.423.177L13.255,14h4.5c.2225,0,.2395-.363.1125-.49S9.423,5.1,9.423,5.1A.24451.24451,0,0,0,9.25,5.027Z" />
			<polygon points="6.996 15 2.999 15 2.999 3 15 3 15 7 17 9 17 1 1 1 1 17 6.996 17 6.996 15" />
		</svg>
	)
}
