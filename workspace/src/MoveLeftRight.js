import React from 'react'

export function MoveLeftRight(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3.1555,5.2415A.5.5,0,0,1,4,5.6V7H7v3H4v1.389a.503.503,0,0,1-.8535.361L0,8.5Z" />
			<path d="M14.8535,5.25A.503.503,0,0,0,14,5.611V7H11v3h3v1.4a.5.5,0,0,0,.8445.3575L18,8.5Z" />
			<rect height={15} rx="0.5" width={2} x={8} y={1} />
		</svg>
	)
}
