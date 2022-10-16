import React from 'react'

export function FileChart(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<polygon points="10 1 10 6 15 6 10 1" />
			<path d="M9.5,7H15v9.5a.5.5,0,0,1-.5.5H3.5a.5.5,0,0,1-.5-.5V1.5A.5.5,0,0,1,3.5,1H9V6.5A.5.5,0,0,0,9.5,7Zm.25,5H8.25a.25.25,0,0,0-.25.25v2.5a.25.25,0,0,0,.25.25h1.5a.25.25,0,0,0,.25-.25v-2.5A.25.25,0,0,0,9.75,12Zm-3,1H5.25a.25.25,0,0,0-.25.25v1.5a.25.25,0,0,0,.25.25h1.5A.25.25,0,0,0,7,14.75v-1.5A.25.25,0,0,0,6.75,13Zm6-3h-1.5a.25.25,0,0,0-.25.25v4.5a.25.25,0,0,0,.25.25h1.5a.25.25,0,0,0,.25-.25v-4.5A.25.25,0,0,0,12.75,10Z" />
		</svg>
	)
}
