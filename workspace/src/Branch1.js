import React from 'react'

export function Branch1(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14,9a2.981,2.981,0,0,0-2.304,1.1L6.92,7.6665a3.0335,3.0335,0,1,0-.673,1.3l4.811,2.45A3,3,0,1,0,14,9Zm0,4.5A1.5,1.5,0,1,1,15.5,12,1.5,1.5,0,0,1,14,13.5Z" />
		</svg>
	)
}
