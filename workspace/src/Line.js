import React from 'react'

export function Line(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect
				height={1}
				rx="0.25"
				transform="translate(-3.72794 8.99994) rotate(-45)"
				width="19.799"
				x="-0.89958"
				y="8.5"
			/>
		</svg>
	)
}
