import React from 'react'

export function Light(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx={9} cy={9} r="3.95" />
			<rect height={3} rx="0.25" width="1.8" x="8.1" />
			<rect height={3} rx="0.25" width="1.8" x="8.1" y={15} />
			<rect height="1.8" rx="0.25" width={3} y="8.1" />
			<rect height="1.8" rx="0.25" width={3} x={15} y="8.1" />
			<rect
				height="1.8"
				rx="0.25"
				transform="translate(1.76808 11.28817) rotate(-45)"
				width={3}
				x="13.01006"
				y="2.60983"
			/>
			<rect
				height="1.8"
				rx="0.25"
				transform="translate(-9.23217 6.73192) rotate(-45)"
				width={3}
				x="2.01006"
				y="13.61017"
			/>
			<rect
				height={3}
				rx="0.25"
				transform="translate(-1.44982 3.49982) rotate(-45)"
				width="1.8"
				x="2.59975"
				y={2}
			/>
			<rect
				height={3}
				rx="0.25"
				transform="translate(-6.00197 14.48997) rotate(-45)"
				width="1.8"
				x="13.58995"
				y="12.99"
			/>
		</svg>
	)
}
