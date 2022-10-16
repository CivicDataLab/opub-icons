import React from 'react'

export function TextIndentIncrease(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.5" width={12} x={4} y={14} />
			<rect height={2} rx="0.5" width={6} x={10} y={10} />
			<rect height={2} rx="0.5" width={6} x={10} y={6} />
			<rect height={2} rx="0.5" width={12} x={4} y={2} />
			<path d="M4,7V5.336a.25.25,0,0,1,.433-.1705L8,9,4.433,12.8345A.25.25,0,0,1,4,12.664V11H.5a.5.5,0,0,1-.5-.5v-3A.5.5,0,0,1,.5,7Z" />
		</svg>
	)
}
