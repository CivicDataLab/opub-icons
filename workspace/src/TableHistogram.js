import React from 'react'

export function TableHistogram(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,1H1.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,16.5,1ZM5,16H2V14H5Zm0-3H2V11H5Zm0-3H2V8H5Zm6,6H6V14h5Zm5-3H6V11H16Zm-3-3H6V8h7Zm3-3H2V2H16Z" />
		</svg>
	)
}
