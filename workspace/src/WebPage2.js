import React from 'react'

export function WebPage2(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M1,2.5v13a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V2.5a.5.5,0,0,0-.5-.5H1.5A.5.5,0,0,0,1,2.5ZM16,15H2V5H16Z" />
		</svg>
	)
}
