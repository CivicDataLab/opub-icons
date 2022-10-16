import React from 'react'

export function Building(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,1H2.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5H8V11h3v6h5.5a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,16.5,1ZM6,13H3V11H6ZM6,9H3V7H6ZM6,5H3V3H6Zm5,4H8V7h3Zm0-4H8V3h3Zm5,8H13V11h3Zm0-4H13V7h3Zm0-4H13V3h3Z" />
		</svg>
	)
}
