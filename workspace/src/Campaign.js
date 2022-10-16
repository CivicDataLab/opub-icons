import React from 'react'

export function Campaign(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx={9} cy={9} r="2.15" />
			<path d="M3.1135,10.1555H1A8.086,8.086,0,0,0,7.844,17V14.8865A6.00351,6.00351,0,0,1,3.1135,10.1555Z" />
			<path d="M14.8865,10.1555a6.0035,6.0035,0,0,1-4.7305,4.731V17A8.086,8.086,0,0,0,17,10.1555Z" />
			<path d="M7.844,3.114V1A8.0855,8.0855,0,0,0,1,7.844H3.114A6,6,0,0,1,7.844,3.114Z" />
			<path d="M14.886,7.844H17A8.0855,8.0855,0,0,0,10.156,1V3.114A6,6,0,0,1,14.886,7.844Z" />
		</svg>
	)
}
