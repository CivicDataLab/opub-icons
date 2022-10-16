import React from 'react'

export function SaveFloppy(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={3} width={2} x={10} y={2} />
			<path d="M15.854,4.1465s-2.0075-2-2.073-2.057A.48449.48449,0,0,0,13.5,2H13V6H7V2H2.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V4.5A.5.5,0,0,0,15.854,4.1465ZM13,15H5V8h8Z" />
		</svg>
	)
}
