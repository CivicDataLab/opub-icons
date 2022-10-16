import React from 'react'

export function DeviceTablet(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17,2H1A1,1,0,0,0,0,3V15a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V3A1,1,0,0,0,17,2ZM15,14H2V4H15Zm1.5-3.75A1.25,1.25,0,1,1,17.75,9,1.25,1.25,0,0,1,16.5,10.25Z" />
		</svg>
	)
}
