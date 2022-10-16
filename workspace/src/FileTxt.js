import React from 'react'

export function FileTxt(props) {
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
			<path d="M9.5,7A.5.5,0,0,1,9,6.5V1H3.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V7ZM13,14.75a.25.25,0,0,1-.25.25H5.25A.25.25,0,0,1,5,14.75v-.5A.25.25,0,0,1,5.25,14h7.5a.25.25,0,0,1,.25.25Zm0-2a.25.25,0,0,1-.25.25H5.25A.25.25,0,0,1,5,12.75v-.5A.25.25,0,0,1,5.25,12h7.5a.25.25,0,0,1,.25.25Zm0-2a.25.25,0,0,1-.25.25H5.25A.25.25,0,0,1,5,10.75v-.5A.25.25,0,0,1,5.25,10h7.5a.25.25,0,0,1,.25.25Z" />
		</svg>
	)
}
