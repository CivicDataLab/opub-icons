import React from 'react'

export function FileMobile(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<polygon points="5 1 5 6 0 6 5 1" />
			<path d="M16.5,4h-7a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5h7a.5.5,0,0,0,.5-.5V4.5A.5.5,0,0,0,16.5,4Zm-4,1h1a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1ZM13,16.55a1.05,1.05,0,1,1,1.05-1.05A1.05,1.05,0,0,1,13,16.55ZM16,14H10V7h6Z" />
			<path d="M8,16V4.2405A1.2405,1.2405,0,0,1,9.2405,3H13V1.5a.5.5,0,0,0-.5-.5H6V6.5a.5.5,0,0,1-.5.5H0v9.5a.5.5,0,0,0,.5.5H8.2785A1.97655,1.97655,0,0,1,8,16Z" />
		</svg>
	)
}