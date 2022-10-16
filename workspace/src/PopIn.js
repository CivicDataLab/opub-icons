import React from 'react'

export function PopIn(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M4.9,8.858,11.9095,1.85a.5.5,0,0,1,.707,0L16.15,5.3835a.5.5,0,0,1,0,.707L9.142,13.1l2.4725,2.4725a.25.25,0,0,1-.1765.427H2V6.5625a.25.25,0,0,1,.427-.1765Z" />
		</svg>
	)
}
