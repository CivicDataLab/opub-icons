import React from 'react'

export function MoreVertical(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx={9} cy={9} r="2.05" />
			<circle cx={9} cy={3} r="2.05" />
			<circle cx={9} cy={15} r="2.05" />
		</svg>
	)
}
