import React from 'react'

export function Label2(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.6465,9.646l-8.5-8.5A.5.5,0,0,0,8.793,1H1.5a.5.5,0,0,0-.5.5V8.7925a.5.5,0,0,0,.1465.354l8.5,8.5a.5.5,0,0,0,.707,0l7.293-7.293a.5.5,0,0,0,.00039-.70711ZM4,5.3A1.3,1.3,0,1,1,5.3,4,1.3,1.3,0,0,1,4,5.3Z" />
		</svg>
	)
}
