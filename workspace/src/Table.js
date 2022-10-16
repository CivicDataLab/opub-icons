import React from 'react'

export function Table(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,1H1.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,16.5,1ZM6,16H2V14H6Zm0-3H2V11H6Zm0-3H2V8H6Zm10,6H7V14h9Zm0-3H7V11h9Zm0-3H7V8h9Zm0-3H2V2H16Z" />
		</svg>
	)
}
