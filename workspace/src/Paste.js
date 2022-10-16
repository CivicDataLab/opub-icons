import React from 'react'

export function Paste(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14,3V5.5a.5.5,0,0,1-.5.5h-9A.5.5,0,0,1,4,5.5V3H2.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V3.5a.5.5,0,0,0-.5-.5Z" />
			<path d="M11,3V2A2,2,0,0,0,7,2V3H5V5h8V3ZM10,3H8V2a1,1,0,0,1,2,0Z" />
		</svg>
	)
}
