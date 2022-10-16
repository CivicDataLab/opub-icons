import React from 'react'

export function Calendar(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,3H14V1.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V3H5V1.5A.5.5,0,0,0,4.5,1h-1a.5.5,0,0,0-.5.5V3H.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h16a.5.5,0,0,0,.5-.5V3.5A.5.5,0,0,0,16.5,3ZM16,16H1V4H3v.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,5,4.5V4h7v.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h2Z" />
			<rect height={2} width={2} x={3} y={6} />
			<rect height={2} width={2} x={6} y={6} />
			<rect height={2} width={2} x={9} y={6} />
			<rect height={2} width={2} x={12} y={6} />
			<rect height={2} width={2} x={3} y={9} />
			<rect height={2} width={2} x={6} y={9} />
			<rect height={2} width={2} x={9} y={9} />
			<rect height={2} width={2} x={12} y={9} />
			<rect height={2} width={2} x={3} y={12} />
			<rect height={2} width={2} x={6} y={12} />
			<rect height={2} width={2} x={9} y={12} />
			<rect height={2} width={2} x={12} y={12} />
		</svg>
	)
}