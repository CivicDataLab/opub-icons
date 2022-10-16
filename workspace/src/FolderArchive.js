import React from 'react'

export function FolderArchive(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7,11.914A1.5,1.5,0,0,1,6,10.5v-1A1.5,1.5,0,0,1,7.5,8H17V5.5a.5.5,0,0,0-.5-.5H1V15.5a.5.5,0,0,0,.5.5H7Z" />
			<path d="M17.5,11H7.5a.5.5,0,0,1-.5-.5v-1A.5.5,0,0,1,7.5,9h10a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,17.5,11ZM17,12v5.5a.5.5,0,0,1-.5.5h-8a.5.5,0,0,1-.5-.5V12Zm-3,3v-.5a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5V15a.5.5,0,0,0,.5.5h2A.5.5,0,0,0,14,15Z" />
			<path d="M8,3H1V1.75A.75.75,0,0,1,1.75,1H5.586a1,1,0,0,1,.707.293Z" />
		</svg>
	)
}
