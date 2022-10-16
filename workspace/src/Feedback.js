import React from 'react'

export function Feedback(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15,1H3A2,2,0,0,0,1,3v8a2,2,0,0,0,2,2H4v4.3965a.25.25,0,0,0,.427.177L9,13h6a2,2,0,0,0,2-2V3A2,2,0,0,0,15,1ZM4,8.675A1.925,1.925,0,1,1,5.925,6.75,1.925,1.925,0,0,1,4,8.675Zm5,0A1.925,1.925,0,1,1,10.925,6.75,1.925,1.925,0,0,1,9,8.675Zm5,0A1.925,1.925,0,1,1,15.925,6.75,1.925,1.925,0,0,1,14,8.675Z" />
		</svg>
	)
}
