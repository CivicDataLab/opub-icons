import React from 'react'

export function Pattern(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.25" width={3} x={1} y={2} />
			<rect height={4} rx="0.25" width={1} x={5} y={1} />
			<rect height={2} rx="0.25" width={3} x={7} y={2} />
			<rect height={2} rx="0.25" width={3} x={13} y={2} />
			<rect height={4} rx="0.25" width={1} x={11} y={1} />
			<rect height={2} rx="0.25" width={3} x={1} y={10} />
			<rect height={4} rx="0.25" width={1} x={5} y={9} />
			<rect height={2} rx="0.25" width={3} x={7} y={10} />
			<rect height={2} rx="0.25" width={3} x={13} y={10} />
			<rect height={4} rx="0.25" width={1} x={11} y={9} />
			<rect height={4} rx="0.25" width={1} x={2} y={5} />
			<rect height={2} rx="0.25" width={3} x={4} y={6} />
			<rect height={2} rx="0.25" width={3} x={10} y={6} />
			<rect height={4} rx="0.25" width={1} x={8} y={5} />
			<rect height={4} rx="0.25" width={1} x={14} y={5} />
			<rect height={4} rx="0.25" width={1} x={2} y={13} />
			<rect height={2} rx="0.25" width={3} x={4} y={14} />
			<rect height={2} rx="0.25" width={3} x={10} y={14} />
			<rect height={4} rx="0.25" width={1} x={8} y={13} />
			<rect height={4} rx="0.25" width={1} x={14} y={13} />
		</svg>
	)
}
