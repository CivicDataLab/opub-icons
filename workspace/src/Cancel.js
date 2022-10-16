import React from 'react'

export function Cancel(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm6,8a5.97146,5.97146,0,0,1-1.1095,3.4765l-8.367-8.367A6,6,0,0,1,15,9ZM3,9A5.97248,5.97248,0,0,1,4.1095,5.5235l8.367,8.3675A6,6,0,0,1,3,9Z" />
		</svg>
	)
}
