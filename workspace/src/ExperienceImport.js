import React from 'react'

export function ExperienceImport(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3,7V5.336a.25.25,0,0,1,.433-.1705L7,9,3.433,12.8345A.25.25,0,0,1,3,12.664V11H.5a.5.5,0,0,1-.5-.5v-3A.5.5,0,0,1,.5,7Z" />
			<path d="M17.5,2H2.5a.5.5,0,0,0-.5.5V4H16V8H8v6H2v1.5a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,17.5,2ZM16,14H9V12h7Zm0-3H9V9h7Z" />
		</svg>
	)
}