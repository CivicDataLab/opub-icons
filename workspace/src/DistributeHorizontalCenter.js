import React from 'react'

export function DistributeHorizontalCenter(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M6.5,3H5V.25A.25.25,0,0,0,4.75,0h-.5A.25.25,0,0,0,4,.25V3H2.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5H4v2.75a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,5,17.75V15H6.5a.5.5,0,0,0,.5-.5V3.5A.5.5,0,0,0,6.5,3Z" />
			<path d="M15.5,5H14V.25A.25.25,0,0,0,13.75,0h-.5A.25.25,0,0,0,13,.25V5H11.5a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,.5.5H13v4.75a.25.25,0,0,0,.25.25h.5a.25.25,0,0,0,.25-.25V13h1.5a.5.5,0,0,0,.5-.5v-7A.5.5,0,0,0,15.5,5Z" />
		</svg>
	)
}
