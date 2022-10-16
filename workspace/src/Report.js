import React from 'react'

export function Report(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.5,2h-9a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,13.5,2ZM8,5.25A.25.25,0,0,1,8.25,5h1.5a.25.25,0,0,1,.25.25v3.5A.25.25,0,0,1,9.75,9H8.25A.25.25,0,0,1,8,8.75Zm-3,2A.25.25,0,0,1,5.25,7h1.5A.25.25,0,0,1,7,7.25v1.5A.25.25,0,0,1,6.75,9H5.25A.25.25,0,0,1,5,8.75Zm6,7.5a.25.25,0,0,1-.25.25H5.25A.25.25,0,0,1,5,14.75v-1.5A.25.25,0,0,1,5.25,13h5.5a.25.25,0,0,1,.25.25Zm2-3a.25.25,0,0,1-.25.25H5.25A.25.25,0,0,1,5,11.75v-1.5A.25.25,0,0,1,5.25,10h7.5a.25.25,0,0,1,.25.25Zm0-3a.25.25,0,0,1-.25.25h-1.5A.25.25,0,0,1,11,8.75V3.25A.25.25,0,0,1,11.25,3h1.5a.25.25,0,0,1,.25.25Z" />
		</svg>
	)
}
