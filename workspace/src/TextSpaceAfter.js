import React from 'react'

export function TextSpaceAfter(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.5" width={10} x={7} y={4} />
			<rect height={2} rx="0.5" width={10} x={7} y={7} />
			<rect height={2} rx="0.5" width={10} x={7} y={1} />
			<path d="M2,16.664a.25.25,0,0,0,.433.1705L5,14,2.433,11.1655A.25.25,0,0,0,2,11.336Z" />
			<path d="M17,16.5v-5a.5.5,0,0,0-.5-.5h-9a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h9A.5.5,0,0,0,17,16.5ZM16,16H8V12h8Z" />
		</svg>
	)
}
