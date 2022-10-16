import React from 'react'

export function Camera(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,6a3,3,0,1,0,3,3A3,3,0,0,0,9,6Z" />
			<path d="M16.5,4H13.475L11.8,2.163A.5.5,0,0,0,11.4295,2H6.5705a.5.5,0,0,0-.3695.163L4.525,4H1.5a.5.5,0,0,0-.5.5v10a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V4.5A.5.5,0,0,0,16.5,4ZM9,13.1A4.1,4.1,0,1,1,13.1,9,4.1,4.1,0,0,1,9,13.1Z" />
		</svg>
	)
}
