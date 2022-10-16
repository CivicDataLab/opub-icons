import React from 'react'

export function TableColumnMerge(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,1H1.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,16.5,1ZM6,16H2V12H6Zm0-5H2V7H6ZM6,6H2V2H6Zm5,0H7V2h4Zm5,10H12V12h4Zm0-5H12V7h4Zm0-5H12V2h4Z" />
		</svg>
	)
}
