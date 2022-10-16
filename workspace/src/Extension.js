import React from 'react'

export function Extension(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16,4H15V.6075a.375.375,0,0,0-.375-.375h-.75a.375.375,0,0,0-.375.375V4h-3V.6075a.375.375,0,0,0-.375-.375h-.75A.375.375,0,0,0,9,.6075V4H8A1,1,0,0,0,7,5V6A1,1,0,0,0,8,7h.0175V9.75a2.25,2.25,0,0,0,2.25,2.25H11.25v1.5A2.656,2.656,0,0,1,6,13.5V5.768a2.7225,2.7225,0,0,0-2.3-2.75A2.6,2.6,0,0,0,.9545,4.656a.3835.3835,0,0,0,.1975.4975l.6445.277a.3915.3915,0,0,0,.51981-.19064L2.3205,5.2305A1.1255,1.1255,0,0,1,4.5,5.625V13.5a4.1435,4.1435,0,0,0,8.25,0V12h.969a2.25,2.25,0,0,0,2.25-2.25V7H16a1,1,0,0,0,1-1V5A1,1,0,0,0,16,4Z" />
		</svg>
	)
}
