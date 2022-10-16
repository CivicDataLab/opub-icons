import React from 'react'

export function Briefcase(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M10,9v1.6435a.375.375,0,0,1-.375.375L8.375,11A.375.375,0,0,1,8,10.625V9H0v6.5a.5.5,0,0,0,.5.5h17a.5.5,0,0,0,.5-.5V9Z" />
			<path d="M17.5,5H13V3a1,1,0,0,0-1-1H6A1,1,0,0,0,5,3V5H.5a.5.5,0,0,0-.5.5V8H8V7.3195a.375.375,0,0,1,.375-.375l1.25.0185A.375.375,0,0,1,10,7.338V8h8V5.5A.5.5,0,0,0,17.5,5ZM6.5,3.5h5V5h-5Z" />
		</svg>
	)
}