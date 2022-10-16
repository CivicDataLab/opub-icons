import React from 'react'

export function ShareAndroid(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.732,12.1135a2.22952,2.22952,0,0,0-1.5785.65L6.4855,9.597a2.18707,2.18707,0,0,0,0-1.1865l5.668-3.184a2.256,2.256,0,1,0-.5715-.9725L5.9225,7.4335a2.2365,2.2365,0,1,0-.02181,3.16281l.02181-.02181L11.582,13.738a2.236,2.236,0,1,0,2.15-1.6245Z" />
		</svg>
	)
}
