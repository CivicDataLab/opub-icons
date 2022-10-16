import React from 'react'

export function Folder(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,4l-7.166.004-1.65-1.7A1,1,0,0,0,6.9645,2H2A1,1,0,0,0,1,3V14.5a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V4.5A.5.5,0,0,0,16.5,4ZM2,3H6.9645L8.908,5H2Z" />
		</svg>
	)
}
