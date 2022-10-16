import React from 'react'

export function Divide(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.25" width={16} x={1} y={8} />
			<circle cx={9} cy={3} r="1.9" />
			<circle cx={9} cy={15} r="1.9" />
		</svg>
	)
}
