import React from 'react'

export function Sharpen(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,.2,3.214,16.75A.1925.1925,0,0,0,3.4,17H14.6a.19249.19249,0,0,0,.184-.25Z" />
		</svg>
	)
}
