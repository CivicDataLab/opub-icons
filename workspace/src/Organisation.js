import React from 'react'

export function Organisation(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,1h-9a.5.5,0,0,0-.5.5V7h5V17h4.5a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,16.5,1ZM11,5H8V3h3Zm5,8H13V11h3Zm0-4H13V7h3Zm0-4H13V3h3Z" />
			<path d="M1,8.5v8a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5v-8a.5.5,0,0,0-.5-.5h-9A.5.5,0,0,0,1,8.5ZM7,9h3v2H7ZM2,9H5v2H2Zm0,4H5v2H2Z" />
		</svg>
	)
}
