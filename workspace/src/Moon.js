import React from 'react'

export function Moon(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm.5,14.982c-.165.0115-.332.018-.5.018A7,7,0,0,1,9,2c.168,0,.335.0065.5.018A11,11,0,0,0,9.5,15.982Z" />
		</svg>
	)
}
