import React from 'react'

export function InvertAdj(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M4,9.25a5.2,5.2,0,0,0,1.091,3.1705L12.9595,5.535A5.25,5.25,0,0,0,4,9.25Z" />
			<path d="M17.5,1H.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h17a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,17.5,1Zm-3,8.25a5.233,5.233,0,0,1-9.409,3.1705L1,16V2H17L12.9595,5.535A5.236,5.236,0,0,1,14.5,9.25Z" />
		</svg>
	)
}