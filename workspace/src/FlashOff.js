import React from 'react'

export function FlashOff(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<polygon points="6.911 10.236 4 18 4.45 18 9.196 12.533 6.911 10.236" />
			<polygon points="9.13 6.805 13 1 6 1 5.357 3.013 9.13 6.805" />
			<polygon points="11.821 9.509 14 7 9.325 7 11.821 9.509" />
			<polygon points="3.988 7.299 3.125 10 6.676 10 3.988 7.299" />
			<rect
				height="21.927"
				rx="0.409"
				transform="translate(-4.08149 9.14687) rotate(-45)"
				width="1.2275"
				x="8.38676"
				y="-1.46327"
			/>
		</svg>
	)
}
