import React from 'react'

export function FileEmail(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<polygon points="10 1 10 6 15 6 10 1" />
			<path d="M8,11.5a.5.5,0,0,1,.5-.5H15V7H9.5A.5.5,0,0,1,9,6.5V1H3.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5H8Z" />
			<path d="M14.104,16.125,18,13.292V17.5a.5.5,0,0,1-.5.5h-8a.5.5,0,0,1-.5-.5V13.292l3.896,2.8335A1.027,1.027,0,0,0,14.104,16.125Zm-.604-.9515L18,12H9Z" />
		</svg>
	)
}
