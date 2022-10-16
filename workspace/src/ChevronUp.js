import React from 'react'

export function ChevronUp(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14,10.99a1,1,0,0,1-1.7055.7055l-3.289-3.286-3.289,3.286a1,1,0,0,1-1.437-1.3865l.0245-.0245L8.3,6.2925a1,1,0,0,1,1.4125,0L13.707,10.284A.9945.9945,0,0,1,14,10.99Z" />
		</svg>
	)
}
