import React from 'react'

export function Apps(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={3} rx="0.5" width={3} x={1} y={1} />
			<rect height={3} rx="0.5" width={3} x={7} y={1} />
			<rect height={3} rx="0.5" width={3} x={13} y={1} />
			<rect height={3} rx="0.5" width={3} x={1} y={7} />
			<rect height={3} rx="0.5" width={3} x={7} y={7} />
			<rect height={3} rx="0.5" width={3} x={13} y={7} />
			<rect height={3} rx="0.5" width={3} x={1} y={13} />
			<rect height={3} rx="0.5" width={3} x={7} y={13} />
			<rect height={3} rx="0.5" width={3} x={13} y={13} />
		</svg>
	)
}