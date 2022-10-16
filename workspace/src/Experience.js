import React from 'react'

export function Experience(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,2H1.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,16.5,2ZM6,14H3V9H6Zm9,0H7V12h8Zm0-3H7V9h8Zm0-3H3V4H15Z" />
		</svg>
	)
}
