import React from 'react'

export function Button(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13,4H5A5,5,0,0,0,5,14h8A5,5,0,0,0,13,4Zm0,9.05H5a4.05,4.05,0,0,1,0-8.1h8a4.05,4.05,0,0,1,0,8.1Z" />
			<path d="M13,6.05H5a2.95,2.95,0,0,0,0,5.9h8a2.95,2.95,0,0,0,0-5.9Z" />
		</svg>
	)
}
