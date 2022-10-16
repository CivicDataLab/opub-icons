import React from 'react'

export function TableRowMerge(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M1,1.5v15a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V1.5a.5.5,0,0,0-.5-.5H1.5A.5.5,0,0,0,1,1.5ZM16,12v4H12V12Zm-5,0v4H7V12ZM6,12v4H2V12ZM6,7v4H2V7ZM16,2V6H12V2ZM11,2V6H7V2ZM6,2V6H2V2Z" />
		</svg>
	)
}
