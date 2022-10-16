import React from 'react'

export function GraphTree(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={9} rx="0.25" width={9} x={1} y={4} />
			<rect height={5} rx="0.25" width={6} x={11} y={4} />
			<rect height={3} rx="0.25" width={4} x={11} y={10} />
			<rect height={3} rx="0.25" width={1} x={16} y={10} />
		</svg>
	)
}
