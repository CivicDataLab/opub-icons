import React from 'react'

export function Shape(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M11.2605,15.9a5.6535,5.6535,0,0,1-5.526-4.512l-.016-.08H.8685a.128.128,0,0,1-.112-.0655.123.123,0,0,1,0-.128L5.868,2.165a.1305.1305,0,0,1,.225,0l1.9705,3.45.09-.06A5.6395,5.6395,0,1,1,11.2605,15.9ZM6.718,11.433A4.69,4.69,0,1,0,8.6125,6.388l-.0765.05,2.671,4.6745a.12552.12552,0,0,1,0,.128.12851.12851,0,0,1-.1125.0655H6.6855Z" />
		</svg>
	)
}
