import React from 'react'

export function LocationBasedEvent(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M10.25,7.027a.247.247,0,0,0-.25.244v9.897a.247.247,0,0,0,.423.1765L13.255,14.5h4c.223,0,.2395-.363.1125-.49S10.423,7.1,10.423,7.1A.24451.24451,0,0,0,10.25,7.027Z" />
			<path d="M1,1V6.238A5.36747,5.36747,0,0,1,3,5.15V3H14V8.579l2,2V1Z" />
			<path d="M4.5,6.1835a4.125,4.125,0,0,0-4.125,4.125c0,2.278,4.125,7.4765,4.125,7.4765s4.125-5.2,4.125-7.4765A4.125,4.125,0,0,0,4.5,6.1835Zm0,5.875a1.75,1.75,0,1,1,1.75-1.75A1.75,1.75,0,0,1,4.5,12.0585Z" />
		</svg>
	)
}