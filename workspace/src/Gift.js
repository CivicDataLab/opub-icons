import React from 'react'

export function Gift(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M1,16.5a.5.5,0,0,0,.5.5H8V10H1ZM0,6.5v2A.5.5,0,0,0,.5,9H8V6H.5A.5.5,0,0,0,0,6.5ZM10,17h6.5a.5.5,0,0,0,.5-.5V10H10ZM17.5,6H10V9h7.5a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,17.5,6Z" />
			<path d="M13,1A5.34241,5.34241,0,0,0,9,3.586,5.34241,5.34241,0,0,0,5,1,2,2,0,0,0,5,5h8a2,2,0,0,0,0-4ZM5,4A1,1,0,0,1,5,2,4.367,4.367,0,0,1,8.1,4Zm8,0H9.9A4.367,4.367,0,0,1,13,2a1,1,0,0,1,0,2Z" />
		</svg>
	)
}
