import React from 'react'

export function GraphGantt(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.5" width={4} />
			<rect height={2} rx="0.5" width={9} x={3} y={3} />
			<rect height={2} rx="0.5" width={4} x={5} y={6} />
			<rect height={2} rx="0.5" width={3} x={7} y={9} />
			<rect height={2} rx="0.5" width={8} x={7} y={12} />
			<rect height={2} rx="0.5" width={9} x={9} y={15} />
		</svg>
	)
}
