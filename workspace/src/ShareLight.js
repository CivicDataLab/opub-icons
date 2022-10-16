import React from 'react'

export function ShareLight(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M12.238,3.5825,9,0,5.77,3.5825A.25.25,0,0,0,5.9555,4H8V9.75a.25.25,0,0,0,.25.25h1.5A.25.25,0,0,0,10,9.75V4h2.0525a.25.25,0,0,0,.1855-.4175Z" />
			<path d="M16.5,5H13V6h3V16H2V6H5V5H1.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V5.5A.5.5,0,0,0,16.5,5Z" />
		</svg>
	)
}
