import React from 'react'

export function GraphScatter(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx={9} cy={8} r="1.1" />
			<circle cx={8} cy={4} r="1.1" />
			<circle cx={15} cy={3} r="1.1" />
			<circle cx={10} cy={10} r="1.1" />
			<circle cx={13} cy={8} r="1.1" />
			<circle cx={6} cy={10} r="1.1" />
			<circle cx={6} cy={5} r="1.1" />
			<circle cx={8} cy={14} r="1.1" />
			<circle cx={3} cy={15} r="1.1" />
		</svg>
	)
}
