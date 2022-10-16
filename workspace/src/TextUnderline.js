import React from 'react'

export function TextUnderline(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={1} rx="0.25" width={14} x={2} y={16} />
			<path d="M2.5,2a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,4,5.5V4H8v9H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H10V4h4V5.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5Z" />
		</svg>
	)
}
