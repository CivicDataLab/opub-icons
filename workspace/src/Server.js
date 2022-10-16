import React from 'react'

export function Server(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M5.5,5h11a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5H5.5a.5.5,0,0,0-.5.5V3H2V1.25A.25.25,0,0,0,1.75,1h-.5A.25.25,0,0,0,1,1.25v15.5a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,2,16.75V15H5v1.5a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5H5.5a.5.5,0,0,0-.5.5V14H2V10H5v.5a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5H5.5a.5.5,0,0,0-.5.5V9H2V4H5v.5A.5.5,0,0,0,5.5,5ZM6,14H8v1H6ZM6,8H8V9H6ZM6,2H8V3H6Z" />
		</svg>
	)
}
