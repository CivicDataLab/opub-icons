import React from 'react'

export function ExportOriginal(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M6,10.5v-3A.5.5,0,0,1,6.5,7H13V2.5a.5.5,0,0,0-.5-.5H.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h12a.5.5,0,0,0,.5-.5V11H6.5A.5.5,0,0,1,6,10.5Z" />
			<path d="M14,5.6035V8H7.25A.25.25,0,0,0,7,8.25v1.5a.25.25,0,0,0,.25.25H14v2.3965a.25.25,0,0,0,.427.1765L17.9565,9,14.427,5.427A.25.25,0,0,0,14,5.6035Z" />
		</svg>
	)
}