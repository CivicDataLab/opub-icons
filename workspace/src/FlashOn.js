import React from 'react'

export function FlashOn(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<polygon points="6 1 13 1 9 7 14 7 4.45 18 4 18 7 10 3.125 10 6 1" />
		</svg>
	)
}
