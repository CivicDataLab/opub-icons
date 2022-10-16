import React from 'react'

export function Share(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,5h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H15v8H3V7H4.5A.5.5,0,0,0,5,6.5v-1A.5.5,0,0,0,4.5,5h-3a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V5.5A.5.5,0,0,0,16.5,5Z" />
			<path d="M5.4,4H8V9.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h2.6a.4.4,0,0,0,.4-.4.39352.39352,0,0,0-.1-.2635L9.1755.072a.25.25,0,0,0-.35,0L5.1,3.334A.39353.39353,0,0,0,5,3.6.4.4,0,0,0,5.4,4Z" />
		</svg>
	)
}
