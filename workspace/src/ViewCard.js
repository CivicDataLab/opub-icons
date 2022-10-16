import React from 'react'

export function ViewCard(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M1,16.5a.5.5,0,0,0,.5.5H5V9H1Z" />
			<path d="M1.5,1a.5.5,0,0,0-.5.5V7H5V1Z" />
			<path d="M13,17h3.5a.5.5,0,0,0,.5-.5V14H13Z" />
			<path d="M16.5,1H13V4h4V1.5A.5.5,0,0,0,16.5,1Z" />
			<rect height={6} width={4} x={7} y={11} />
			<rect height={8} width={4} x={7} y={1} />
			<rect height={6} width={4} x={13} y={6} />
		</svg>
	)
}
