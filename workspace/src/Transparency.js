import React from 'react'

export function Transparency(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={3} width={3} x={6} y={6} />
			<rect height={3} width={3} x={9} y={9} />
			<path d="M15.5,2H2.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,15.5,2ZM15,6H12V9h3v3H12v3H9V12H6v3H3V12H6V9H3V6H6V3H9V5.99h3V3h3Z" />
		</svg>
	)
}
