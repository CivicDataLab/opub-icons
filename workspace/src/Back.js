import React from 'react'

export function Back(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M5,5V2.6035a.25.25,0,0,0-.427-.177L0,7l4.573,4.573A.25.25,0,0,0,5,11.3965V9h8v6.5a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5V8a3,3,0,0,0-3-3Z" />
		</svg>
	)
}
