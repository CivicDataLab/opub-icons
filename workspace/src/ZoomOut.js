import React from 'react'

export function ZoomOut(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.25" width={6} x={5} y={7} />
			<path d="M17.587,16.1075,13.628,12.15a7.0155,7.0155,0,1,0-1.478,1.4785l3.958,3.958a1.05,1.05,0,0,0,1.479-1.479ZM3,8a5,5,0,1,1,5,5A5,5,0,0,1,3,8Z" />
		</svg>
	)
}
