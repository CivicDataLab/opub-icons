import React from 'react'

export function ChevronLeft(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M6,9a.994.994,0,0,0,.2925.7045l3.9915,3.99a1,1,0,1,0,1.4355-1.386l-.0245-.0245L8.4095,9l3.286-3.285A1,1,0,0,0,10.309,4.28l-.0245.0245L6.293,8.2945A.994.994,0,0,0,6,9Z" />
		</svg>
	)
}
