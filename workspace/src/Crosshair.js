import React from 'react'

export function Crosshair(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,7.9A1.1,1.1,0,1,0,10.1,9,1.1,1.1,0,0,0,9,7.9Z" />
			<path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm1,14.776V12H8v3.776A6.85,6.85,0,0,1,2.224,10H6V8H2.224A6.85,6.85,0,0,1,8,2.224V6h2V2.224A6.85,6.85,0,0,1,15.776,8H12v2h3.776A6.85,6.85,0,0,1,10,15.776Z" />
		</svg>
	)
}
