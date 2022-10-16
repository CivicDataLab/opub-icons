import React from 'react'

export function OutlinePath(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M5.25,11H3V3h8V5.25h1V2.5a.5.5,0,0,0-.5-.5h-9a.5.5,0,0,0-.5.5v9a.5.5,0,0,0,.5.5H5.25Z" />
			<path d="M15.5,6H12.75V7H15v8H7V12.75H6V15.5a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5v-9A.5.5,0,0,0,15.5,6Z" />
			<path d="M11,7.75V11H7.75v1H11.5a.5.5,0,0,0,.5-.5V7.75Z" />
			<path d="M10.25,6H6.5a.5.5,0,0,0-.5.5v3.75H7V7h3.25Z" />
		</svg>
	)
}
