import React from 'react'

export function GraphBarHorizontal(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,5H3V2H16.5a.5.5,0,0,1,.5.5v2A.5.5,0,0,1,16.5,5Z" />
			<path d="M11.5,9H3V6h8.5a.5.5,0,0,1,.5.5v2A.5.5,0,0,1,11.5,9Z" />
			<path d="M7.5,13H3V10H7.5a.5.5,0,0,1,.5.5v2A.5.5,0,0,1,7.5,13Z" />
			<path d="M5.5,17H3V14H5.5a.5.5,0,0,1,.5.5v2A.5.5,0,0,1,5.5,17Z" />
			<rect height={17} rx="0.25" width={1} x={1} y={1} />
		</svg>
	)
}
