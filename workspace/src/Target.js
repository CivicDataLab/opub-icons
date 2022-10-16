import React from 'react'

export function Target(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1ZM9,14.1A5.1,5.1,0,1,1,14.1,9,5.1,5.1,0,0,1,9,14.1Z" />
			<circle cx={9} cy={9} r={2} />
		</svg>
	)
}
