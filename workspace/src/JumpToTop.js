import React from 'react'

export function JumpToTop(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M11,11v5.5a.5.5,0,0,1-.5.5h-4a.5.5,0,0,1-.5-.5V11H2.5035a.25.25,0,0,1-.177-.427L8.5,4.5l6.173,6.073a.25.25,0,0,1-.177.427Z" />
			<rect height={2} rx="0.25" width={17} y={1} />
		</svg>
	)
}
