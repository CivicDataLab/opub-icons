import React from 'react'

export function Device(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,11H3V3H17V2a1,1,0,0,0-1-1H1A1,1,0,0,0,0,2V12a1,1,0,0,0,1,1H9ZM1.5,8.25A1.25,1.25,0,1,1,2.75,7,1.25,1.25,0,0,1,1.5,8.25Z" />
			<path d="M17,4H11a1,1,0,0,0-1,1V17a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V5A1,1,0,0,0,17,4ZM13.5,5h1a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1ZM14,17.55a1.05,1.05,0,1,1,1.05-1.05A1.05,1.05,0,0,1,14,17.55ZM17,15H11V7h6Z" />
		</svg>
	)
}
