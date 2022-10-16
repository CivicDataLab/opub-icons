import React from 'react'

export function ColumnTwoA(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16,1H10V17h6a1,1,0,0,0,1-1V2A1,1,0,0,0,16,1Z" />
			<path d="M8,1H2A1,1,0,0,0,1,2V16a1,1,0,0,0,1,1H8Z" />
		</svg>
	)
}
