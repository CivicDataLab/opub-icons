import React from 'react'

export function Seat(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M2.5,9H2a1,1,0,0,0-1,1v6.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-7A.5.5,0,0,0,2.5,9Z" />
			<path d="M16,9h-.5a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V10A1,1,0,0,0,16,9Z" />
			<rect height={4} rx="0.5" width={10} x={4} y={11} />
			<path d="M11,2H7A3,3,0,0,0,4,5V9.5a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5V5A3,3,0,0,0,11,2Z" />
		</svg>
	)
}
