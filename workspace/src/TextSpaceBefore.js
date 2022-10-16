import React from 'react'

export function TextSpaceBefore(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.5" width={11} x={6} y={12} />
			<rect height={2} rx="0.5" width={11} x={6} y={9} />
			<rect height={2} rx="0.5" width={11} x={6} y={15} />
			<path d="M1,1.336a.25.25,0,0,1,.433-.1705L4,4,1.433,6.8345A.25.25,0,0,1,1,6.664Z" />
			<path d="M16.5,1H6.5a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,16.5,1ZM16,6H7V2h9Z" />
		</svg>
	)
}
