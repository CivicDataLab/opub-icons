import React from 'react'

export function DocumentFragmentGroup(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.5,4H2.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V4.5A.5.5,0,0,0,17.5,4ZM4,6h7v4.4375A4.26593,4.26593,0,0,0,9.261,9.875c-.8265,0-1.2,1.1-2.026,1.1s-.85-1.8825-1.6755-1.8825C4.8085,9.0905,4,11,4,11Zm12,8H4V13H16Zm0-4H13V9h3Zm0-3H13V6h3Z" />
			<path d="M1,3.5A.5.5,0,0,1,1.5,3H16V2.5a.5.5,0,0,0-.5-.5H.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5H1Z" />
			<circle cx={9} cy={8} r={1} />
		</svg>
	)
}