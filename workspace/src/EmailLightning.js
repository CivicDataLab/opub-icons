import React from 'react'

export function EmailLightning(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14.6565,3.343A8,8,0,1,0,5.979,16.409L8.45,10H5.5l2-6H12L9.5,8H13L6.2365,16.5a7.9955,7.9955,0,0,0,8.42-13.157Z" />
		</svg>
	)
}
