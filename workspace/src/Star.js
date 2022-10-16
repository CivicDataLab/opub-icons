import React from 'react'

export function Star(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9.2385.2965,11.4,6.0145l6.106.289a.255.255,0,0,1,.15.454l-4.77,3.823,1.612,5.8965a.255.255,0,0,1-.386.2805L9,13.4025l-5.11,3.355a.255.255,0,0,1-.386-.2805l1.612-5.8965L.346,6.7575a.255.255,0,0,1,.15-.454L6.6,6.0145,8.7615.2965a.255.255,0,0,1,.477,0Z" />
		</svg>
	)
}