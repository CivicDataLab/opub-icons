import React from 'react'

export function Journey(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14.5,11.1a1.4,1.4,0,1,1-1.4,1.4A1.4,1.4,0,0,1,14.5,11.1Zm0-2.1A3.5,3.5,0,0,0,11,12.5c0,1.933,3.5,5.5,3.5,5.5S18,14.433,18,12.5A3.5,3.5,0,0,0,14.5,9Z" />
			<path d="M10.3875,14H10a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h2.05a2.5,2.5,0,1,0,0-1H10A2,2,0,0,0,8,5V8H5.95a2.5,2.5,0,1,0,0,1H8v4a2,2,0,0,0,2,2h.9125A9.51829,9.51829,0,0,1,10.3875,14ZM14.5,2A1.5,1.5,0,1,1,13,3.5,1.5,1.5,0,0,1,14.5,2Zm-11,8A1.5,1.5,0,1,1,5,8.5,1.5,1.5,0,0,1,3.5,10Z" />
		</svg>
	)
}
