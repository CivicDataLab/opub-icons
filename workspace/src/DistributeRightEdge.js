import React from 'react'

export function DistributeRightEdge(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M6.75,0h-.5A.25.25,0,0,0,6,.25V3H2.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5H6v2.75a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,7,17.75V.25A.25.25,0,0,0,6.75,0Z" />
			<path d="M15.75,0h-.5A.25.25,0,0,0,15,.25V5H11.5a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,.5.5H15v4.75a.25.25,0,0,0,.25.25h.5a.25.25,0,0,0,.25-.25V.25A.25.25,0,0,0,15.75,0Z" />
		</svg>
	)
}
