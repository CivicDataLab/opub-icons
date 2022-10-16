import React from 'react'

export function DistributeLeftEdge(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M6.537,3H3V.25A.25.25,0,0,0,2.75,0h-.5A.25.25,0,0,0,2,.25v17.5a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,3,17.75V15H6.537A.463.463,0,0,0,7,14.537H7V3.463A.46351.46351,0,0,0,6.537,3Z" />
			<path d="M15.5,5H12V.25A.25.25,0,0,0,11.75,0h-.5A.25.25,0,0,0,11,.25v17.5a.25.25,0,0,0,.25.25h.5a.25.25,0,0,0,.25-.25V13h3.5a.5.5,0,0,0,.5-.5v-7A.5.5,0,0,0,15.5,5Z" />
		</svg>
	)
}