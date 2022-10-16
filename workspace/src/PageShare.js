import React from 'react'

export function PageShare(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14.861,9.1655,12,6,9.146,9.1655A.5.5,0,0,0,9.5175,10H11v3.75a.25.25,0,0,0,.25.25h1.5a.25.25,0,0,0,.25-.25V10h1.4895a.5.5,0,0,0,.3715-.8345Z" />
			<path d="M15,11v5H9V11H7.5a.5.5,0,0,0-.5.5v6a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5v-6a.5.5,0,0,0-.5-.5Z" />
			<path d="M6,15H2V5H16v5h1V2.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5H6Z" />
		</svg>
	)
}
