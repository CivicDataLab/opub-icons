import React from 'react'

export function MoreSmallListVert(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx={9} cy="13.5" r="1.425" />
			<circle cx={9} cy={9} r="1.425" />
			<circle cx={9} cy="4.5" r="1.425" />
		</svg>
	)
}
