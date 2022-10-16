import React from 'react'

export function FolderOpenOutline(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M4.345,7H16.6125l-2.333,7H2ZM6.9645,2H2A1,1,0,0,0,1,3V14.5a.5.5,0,0,0,.5.5H14.6395a.5.5,0,0,0,.4745-.342l2.6665-8A.5.5,0,0,0,17.3065,6H16V4.5a.5.5,0,0,0-.5-.5l-6.166.0035-1.65-1.7A1,1,0,0,0,6.9645,2Z" />
		</svg>
	)
}
