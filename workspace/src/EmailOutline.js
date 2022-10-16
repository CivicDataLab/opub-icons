import React from 'react'

export function EmailOutline(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.5,2H.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h17a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,17.5,2ZM17,3v.753L9,9.8705,1,3.753V3Zm0,2.0115v7.95l-5.2-3.975ZM6.2,8.9865,1,12.9615v-7.95ZM1,15v-.78L7.021,9.616l1.3715,1.05a1,1,0,0,0,1.215,0l1.3715-1.05L17,14.22V15Z" />
		</svg>
	)
}
