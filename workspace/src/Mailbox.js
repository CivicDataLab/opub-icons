import React from 'react'

export function Mailbox(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M2.5,4A2.5,2.5,0,0,0,0,6.5v8a.5.5,0,0,0,.5.5H6V6.5A2.5,2.5,0,0,0,3.5,4Z" />
			<path d="M15.5,4H9V7.5a.5.5,0,0,1-.5.5H7v7H17.5a.5.5,0,0,0,.5-.5v-8A2.5,2.5,0,0,0,15.5,4Z" />
			<path d="M10.5,0h-3A.5.5,0,0,0,7,.5V7H8V3h2.5a.5.5,0,0,0,.5-.5V.5A.5.5,0,0,0,10.5,0Z" />
		</svg>
	)
}
