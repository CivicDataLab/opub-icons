import React from 'react'

export function TextBulletedHierarchy(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={3} rx="1.4" width={3} x={2} y={1} />
			<rect height={3} rx="1.4" width={3} x={6} y={7} />
			<rect height={3} rx="1.4" width={3} x={6} y={13} />
			<rect height={2} rx="0.5" width={7} x={10} y={14} />
			<rect height={2} rx="0.5" width={7} x={10} y={8} />
			<rect height={2} rx="0.5" width={11} x={6} y={2} />
		</svg>
	)
}
