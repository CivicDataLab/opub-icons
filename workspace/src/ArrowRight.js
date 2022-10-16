import React from 'react'

export function ArrowRight(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M10,6H1.5a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5H10v3.4965a.25.25,0,0,0,.427.177L17.1,9,10.427,2.327A.25.25,0,0,0,10,2.5035Z" />
		</svg>
	)
}
