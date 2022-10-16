import React from 'react'

export function MoreCircle(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1ZM4.51,10.6955A1.6955,1.6955,0,1,1,6.2055,9,1.6955,1.6955,0,0,1,4.51,10.6955Zm4.49,0a1.6955,1.6955,0,1,1,1.6955-1.696V9A1.696,1.696,0,0,1,9,10.6955Zm4.4115,0A1.6955,1.6955,0,1,1,15.107,9a1.6955,1.6955,0,0,1-1.6955,1.6955Z" />
		</svg>
	)
}
