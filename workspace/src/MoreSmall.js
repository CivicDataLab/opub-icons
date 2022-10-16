import React from 'react'

export function MoreSmall(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx="8.9" cy="9.1" r="1.7" />
			<circle cx="14.75" cy="9.1" r="1.7" />
			<circle cx="3.05" cy="9.1" r="1.7" />
		</svg>
	)
}
