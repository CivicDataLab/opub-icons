import React from 'react'

export function Archive(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={3} rx="0.5" width={props.width || 18} y={2} />
			<path d="M1,6v9.5a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V6Zm10.5,6h-5a.5.5,0,0,1-.5-.5v-2A.5.5,0,0,1,6.5,9h5a.5.5,0,0,1,.5.5v2A.5.5,0,0,1,11.5,12Z" />
		</svg>
	)
}
