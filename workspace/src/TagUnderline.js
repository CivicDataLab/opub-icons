import React from 'react'

export function TagUnderline(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={1} rx="0.25" width={11} x="3.5" y={15} />
			<path d="M11.25,2.006a.25.25,0,0,0-.25.25v6.75s.241,3.1-2.5,3.1c-2.7295,0-2.5-3.1-2.5-3.1V2.256a.25.25,0,0,0-.25-.25H4.25a.25.25,0,0,0-.25.25v6.75c0,.706-.0705,5,4.5,5S13,9.5,13,8.994V2.256a.25.25,0,0,0-.25-.25Z" />
		</svg>
	)
}
