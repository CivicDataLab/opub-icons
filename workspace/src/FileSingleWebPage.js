import React from 'react'

export function FileSingleWebPage(props) {
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
			<path d="M6,14h6V11H6ZM9.5,7A.5.5,0,0,1,9,6.5V1H3.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V7ZM13,14.5a.5.5,0,0,1-.5.5h-7a.5.5,0,0,1-.5-.5v-5A.5.5,0,0,1,5.5,9h7a.5.5,0,0,1,.5.5Z" />
		</svg>
	)
}
