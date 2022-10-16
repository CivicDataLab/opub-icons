import React from 'react'

export function Crop(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M12,11h2V4.5a.5.5,0,0,0-.5-.5H7V6h5Z" />
			<path d="M6,12V1.5A.5.5,0,0,0,5.5,1h-1a.5.5,0,0,0-.5.5V4H1.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H4v7.5a.5.5,0,0,0,.5.5H12v2.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V14h2.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5Z" />
		</svg>
	)
}
