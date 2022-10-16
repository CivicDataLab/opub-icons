import React from 'react'

export function DevicePhone(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13,0H5A1,1,0,0,0,4,1V17a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V1A1,1,0,0,0,13,0ZM8.5,1h1a.5205.5205,0,0,1,.5.5.52.52,0,0,1-.5.5h-1A.5115.5115,0,0,1,8,1.5.512.512,0,0,1,8.5,1ZM9,17.55a1.05,1.05,0,1,1,1.05-1.05A1.05,1.05,0,0,1,9,17.55ZM13,15H5V3h8Z" />
		</svg>
	)
}
