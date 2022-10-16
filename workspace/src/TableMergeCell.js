import React from 'react'

export function TableMergeCell(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,1H1.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,16.5,1ZM2,2H6V6H2ZM2,7H6v4H2Zm0,9V12H6v4Zm5,0V12h4v4Zm9,0H12V12h4Z" />
		</svg>
	)
}
