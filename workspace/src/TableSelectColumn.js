import React from 'react'

export function TableSelectColumn(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,1H1.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,16.5,1ZM2,2H5V6H2ZM2,7H5v4H2Zm0,9V12H5v4Zm5-1V3h4V15Zm9,1H13V12h3Zm0-5H13V7h3Zm0-5H13V2h3Z" />
		</svg>
	)
}
