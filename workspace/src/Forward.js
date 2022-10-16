import React from 'react'

export function Forward(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13,5V2.6035a.25.25,0,0,1,.427-.177L18,7l-4.573,4.573A.25.25,0,0,1,13,11.3965V9H5v6.5a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5V8A3,3,0,0,1,4,5Z" />
		</svg>
	)
}
