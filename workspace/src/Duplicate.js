import React from 'react'

export function Duplicate(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M4.5,4H13V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5H4V4.5A.5.5,0,0,1,4.5,4Z" />
			<path d="M16.5,5H5.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V5.5A.5.5,0,0,0,16.5,5Zm-2,6.75H11.75V14.5h-1.5V11.75H7.5v-1.5h2.75V7.5h1.5v2.75H14.5Z" />
		</svg>
	)
}
