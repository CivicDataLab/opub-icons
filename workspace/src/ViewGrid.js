import React from 'react'

export function ViewGrid(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M5,5H1V1.5A.5.5,0,0,1,1.5,1H5Z" />
			<rect height={4} width={4} x={7} y={1} />
			<path d="M17,5H13V1h3.5a.5.5,0,0,1,.5.5Z" />
			<rect height={4} width={4} x={1} y={7} />
			<rect height={4} width={4} x={7} y={7} />
			<rect height={4} width={4} x={13} y={7} />
			<path d="M5,17H1.5a.5.5,0,0,1-.5-.5V13H5Z" />
			<rect height={4} width={4} x={7} y={13} />
			<path d="M16.5,17H13V13h4v3.5A.5.5,0,0,1,16.5,17Z" />
		</svg>
	)
}
