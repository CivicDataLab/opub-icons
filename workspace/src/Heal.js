import React from 'react'

export function Heal(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.364,1.636a3,3,0,0,0-4.2425,0L8.8935,4.864,1.636,12.1215A3,3,0,0,0,5.8785,16.364L8.85,13.3905l7.514-7.512A3,3,0,0,0,16.364,1.636ZM9.5,5.5a1,1,0,1,1-1,1A1,1,0,0,1,9.5,5.5Zm-3,5a1,1,0,1,1,1-1A1,1,0,0,1,6.5,10.5Zm2,2a1,1,0,1,1,1-1A1,1,0,0,1,8.5,12.5Zm3-3a1,1,0,1,1,1-1A1,1,0,0,1,11.5,9.5Z" />
		</svg>
	)
}
