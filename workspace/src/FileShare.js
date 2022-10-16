import React from 'react'

export function FileShare(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<polygon points="8 1 8 6 3 6 8 1" />
			<path d="M7,11.5A1.5,1.5,0,0,1,8.5,10h.604a1.5,1.5,0,0,1,.3-1.504L13,4.508l2,2.2135V1.5a.5.5,0,0,0-.5-.5H9V6.5a.5.5,0,0,1-.5.5H3v9.5a.5.5,0,0,0,.5.5H7Z" />
			<path d="M15.861,9.1655,13,6,10.146,9.1655A.5.5,0,0,0,10.5175,10H12v3.75a.25.25,0,0,0,.25.25h1.5a.25.25,0,0,0,.25-.25V10h1.4895a.5.5,0,0,0,.3715-.8345Z" />
			<path d="M16,11v5H10V11H8.5a.5.5,0,0,0-.5.5v6a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5v-6a.5.5,0,0,0-.5-.5Z" />
		</svg>
	)
}
