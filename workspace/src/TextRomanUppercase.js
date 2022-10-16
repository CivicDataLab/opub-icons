import React from 'react'

export function TextRomanUppercase(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.5" width={11} x={7} y={2} />
			<rect height={2} rx="0.5" width={11} x={7} y={8} />
			<rect height={2} rx="0.5" width={11} x={7} y={14} />
			<rect height={5} rx="0.25" width={1} x={4} />
			<rect height={5} rx="0.25" width={1} x={5} y={6} />
			<rect height={5} rx="0.25" width={1} x={3} y={6} />
			<rect height={5} rx="0.25" width={1} x={5} y={12} />
			<rect height={5} rx="0.25" width={1} x={3} y={12} />
			<rect height={5} rx="0.25" width={1} x={1} y={12} />
		</svg>
	)
}
