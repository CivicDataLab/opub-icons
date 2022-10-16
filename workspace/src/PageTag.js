import React from 'react'

export function PageTag(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M8.1,15H1V5H15V8.1l1,1V2.5a.5.5,0,0,0-.5-.5H.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5H9.1Z" />
			<path d="M17.834,13.053l-4.94-4.9395A.386.386,0,0,0,12.621,8H8.386A.386.386,0,0,0,8,8.386v4.2355a.386.386,0,0,0,.113.273l4.9395,4.94a.386.386,0,0,0,.54589.00011l.00011-.00011L17.834,13.6a.386.386,0,0,0,.00111-.54588ZM10.2,11.474A1.274,1.274,0,1,1,11.474,10.2,1.274,1.274,0,0,1,10.2,11.474Z" />
		</svg>
	)
}