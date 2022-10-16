import React from 'react'

export function MoveUpDown(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M11.7585,3.1555A.5.5,0,0,1,11.4,4H10V7H7V4H5.611a.503.503,0,0,1-.361-.8535L8.5,0Z" />
			<path d="M11.75,14.8535A.503.503,0,0,0,11.389,14H10V11H7v3H5.6a.5.5,0,0,0-.3575.8445L8.5,18Z" />
			<rect height={2} rx="0.5" width={15} x={1} y={8} />
		</svg>
	)
}
