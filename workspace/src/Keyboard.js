import React from 'react'

export function Keyboard(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.25" width={2} y={4} />
			<rect height={2} rx="0.25" width={4} y={7} />
			<rect height={2} rx="0.25" width={3} x={14} y={7} />
			<rect height={2} rx="0.25" width={4} x={13} y={10} />
			<rect height={2} rx="0.25" width={3} y={10} />
			<rect height={2} rx="0.25" width={8} x={4} y={10} />
			<rect height={2} rx="0.25" width={2} x={3} y={4} />
			<rect height={2} rx="0.25" width={2} x={6} y={4} />
			<rect height={2} rx="0.25" width={2} x={9} y={4} />
			<rect height={2} rx="0.25" width={2} x={5} y={7} />
			<rect height={2} rx="0.25" width={2} x={8} y={7} />
			<rect height={2} rx="0.25" width={2} x={11} y={7} />
			<rect height={2} rx="0.25" width={2} x={12} y={4} />
			<rect height={2} rx="0.25" width={2} x={15} y={4} />
		</svg>
	)
}
