import React from 'react'

export function SelectContainer(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,3H3.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V3.5A.5.5,0,0,0,16.5,3ZM7,16H4V14H7Zm0-3H4V11H7Zm0-3H4V8H7Zm9,6H8V14h8Zm0-3H8V11h8Zm0-3H8V8h8Zm0-3H4V4H16Z" />
			<path d="M2,2H15V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5H2Z" />
		</svg>
	)
}
