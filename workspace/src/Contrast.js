import React from 'react'

export function Contrast(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1.05A7.95,7.95,0,1,0,16.95,9,7.95,7.95,0,0,0,9,1.05ZM9,15.9565a6.956,6.956,0,1,1,.001,0Z" />
			<path d="M9,3.1V14.9A5.9,5.9,0,0,0,9,3.1Z" />
		</svg>
	)
}
