import React from 'react'

export function ArrowLeft(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M8,6h8.5a.5.5,0,0,1,.5.5v5a.5.5,0,0,1-.5.5H8v3.4965a.25.25,0,0,1-.427.177L.9,9,7.573,2.327A.25.25,0,0,1,8,2.5035Z" />
		</svg>
	)
}
