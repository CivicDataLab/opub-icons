import React from 'react'

export function Collection(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,2H1.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,16.5,2ZM6,14H2V9H6ZM6,8H2V3H6Zm5,6H7V9h4Zm0-6H7V3h4Zm5,6H12V9h4Zm0-6H12V3h4Z" />
		</svg>
	)
}
