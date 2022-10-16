import React from 'react'

export function FileAdd(props) {
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
			<path d="M7.35,13.5A6.1545,6.1545,0,0,1,15,7.5345V1.5a.5.5,0,0,0-.5-.5H9V6.5a.5.5,0,0,1-.5.5H3v9.5a.5.5,0,0,0,.5.5H8.443A6.12045,6.12045,0,0,1,7.35,13.5Z" />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05Zm2.5,4.7a.25.25,0,0,1-.25.25H14v1.75a.25.25,0,0,1-.25.25h-.5a.25.25,0,0,1-.25-.25V14H11.25a.25.25,0,0,1-.25-.25v-.5a.25.25,0,0,1,.25-.25H13V11.25a.25.25,0,0,1,.25-.25h.5a.25.25,0,0,1,.25.25V13h1.75a.25.25,0,0,1,.25.25Z" />
		</svg>
	)
}
