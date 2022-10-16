import React from 'react'

export function TreeExpand(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M2,2.5v13a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V2.5a.5.5,0,0,0-.5-.5H2.5A.5.5,0,0,0,2,2.5ZM12.75,10H10v2.75a.25.25,0,0,1-.25.25H8.25A.25.25,0,0,1,8,12.75V10H5.25A.25.25,0,0,1,5,9.75V8.25A.25.25,0,0,1,5.25,8H8V5.25A.25.25,0,0,1,8.25,5h1.5a.25.25,0,0,1,.25.25V8h2.75a.25.25,0,0,1,.25.25v1.5A.25.25,0,0,1,12.75,10Z" />
		</svg>
	)
}