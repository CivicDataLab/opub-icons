import React from 'react'

export function DividePath(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={6} width={6} x={6} y={6} />
			<path d="M5,5h7V2.5a.5.5,0,0,0-.5-.5h-9a.5.5,0,0,0-.5.5v9a.5.5,0,0,0,.5.5H5Z" />
			<path d="M15.5,6H13v7H6v2.5a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5v-9A.5.5,0,0,0,15.5,6Z" />
		</svg>
	)
}
