import React from 'react'

export function Clock(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1ZM9,16a7,7,0,1,1,7-7A7,7,0,0,1,9,16Z" />
			<path d="M10,8.043V3.5A.5.5,0,0,0,9.5,3h-1a.5.5,0,0,0-.5.5V8.793a.5.5,0,0,0,.1465.3535L10.95,11.95a.5.5,0,0,0,.70711.00039L11.6575,11.95l.6675-.668a.5.5,0,0,0,0-.707L10.1465,8.396A.5.5,0,0,1,10,8.043Z" />
		</svg>
	)
}
