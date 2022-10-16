import React from 'react'

export function Border(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M2,2.5v13a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V2.5a.5.5,0,0,0-.5-.5H2.5A.5.5,0,0,0,2,2.5ZM15,15H3V3H15Z" />
			<path d="M4,4V14H14V4Zm9,9H5V5h8Z" />
		</svg>
	)
}
