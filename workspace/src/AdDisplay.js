import React from 'react'

export function AdDisplay(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={7} width={4} x={11} y={4} />
			<path d="M17.5,1H.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5H7v2.5a.5.5,0,0,1-.5.5h-1a.4895.4895,0,0,0-.5.47877q-.00022.01062,0,.02123V18h8v-.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,1-.5-.5V14h6.5a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,17.5,1ZM16,12H2V3H16Z" />
		</svg>
	)
}
