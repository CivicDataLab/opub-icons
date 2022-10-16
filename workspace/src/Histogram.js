import React from 'react'

export function Histogram(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={5} rx="0.25" width={1} x={1} y={12} />
			<rect height={9} rx="0.25" width={1} x={3} y={8} />
			<rect height={9} rx="0.25" width={1} x={9} y={8} />
			<rect height={7} rx="0.25" width={1} x={13} y={10} />
			<rect height={3} rx="0.25" width={1} x={15} y={14} />
			<rect height={14} rx="0.25" width={1} x={5} y={3} />
			<rect height={11} rx="0.25" width={1} x={7} y={6} />
			<rect height={12} rx="0.25" width={1} x={11} y={5} />
		</svg>
	)
}
