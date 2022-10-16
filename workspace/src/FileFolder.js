import React from 'react'

export function FileFolder(props) {
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
			<path d="M9,16.75V11.5A1.5,1.5,0,0,1,10.5,10h2.293a1.491,1.491,0,0,1,1.0605.4395L15,11.586V7H9.5A.5.5,0,0,1,9,6.5V1H3.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5H9.05A1.19238,1.19238,0,0,1,9,16.75Z" />
			<path d="M16.75,17h-6.5a.25.25,0,0,1-.25-.25V13h6.75a.25.25,0,0,1,.25.25v3.5A.25.25,0,0,1,16.75,17ZM14,12l-.8535-.8535A.5.5,0,0,0,12.793,11H10.5a.5.5,0,0,0-.5.5V12Z" />
		</svg>
	)
}
