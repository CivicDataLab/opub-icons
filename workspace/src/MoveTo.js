import React from 'react'

export function MoveTo(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M10.9395,10.172a.5.5,0,0,1-.707,0L7.828,7.7675a.5.5,0,0,1,0-.707L11.8885,3H1.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V6.1115Z" />
			<path d="M11.8535,1a.25.25,0,0,0-.1765.427l1.741,1.741L9.35,7.2375a.25.25,0,0,0,0,.3535L10.409,8.65a.25.25,0,0,0,.3535,0L14.832,4.5805,16.573,6.322A.25.25,0,0,0,17,6.1465V1Z" />
		</svg>
	)
}
