import React from 'react'

export function RotateLeft(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,5H5.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V5.5A.5.5,0,0,0,16.5,5Z" />
			<path d="M3.75,7.5h-1V6a3,3,0,0,1,3-3h1a.5.5,0,0,0,.5-.5V2a.5.5,0,0,0-.5-.5h-1A4.5,4.5,0,0,0,1.25,6V7.5h-1A.25.25,0,0,0,0,7.75a.245.245,0,0,0,.0735.175L1.842,9.9415a.25.25,0,0,0,.316,0L3.9265,7.925A.245.245,0,0,0,4,7.75.25.25,0,0,0,3.75,7.5Z" />
		</svg>
	)
}
