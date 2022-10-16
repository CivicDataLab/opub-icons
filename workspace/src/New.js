import React from 'react'

export function New(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,3H2.5a.5.5,0,0,0-.5.5v10a.5.5,0,0,1-1,0V5.25A.25.25,0,0,0,.75,5H.25A.25.25,0,0,0,0,5.25V13.5A1.5,1.5,0,0,0,1.5,15h14A1.5,1.5,0,0,0,17,13.5V3.5A.5.5,0,0,0,16.5,3Zm-1,11H3V4H16v9.5A.5.5,0,0,1,15.5,14Z" />
			<rect height={1} width={5} x={10} y={6} />
			<rect height={1} width={5} x={10} y={10} />
			<rect height={1} width={5} x={4} y={12} />
			<rect height={1} width={5} x={10} y={8} />
			<rect height={1} width={5} x={10} y={12} />
			<rect height={5} width={5} x={4} y={6} />
		</svg>
	)
}
