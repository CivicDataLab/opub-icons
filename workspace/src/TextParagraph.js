import React from 'react'

export function TextParagraph(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M6.7,2A4.78747,4.78747,0,0,0,2.023,6.0525a4.50451,4.50451,0,0,0,4.03966,4.92567q.218.02154.43734.02183c.525,0,1.5-.0375,1.5-.0375V16.75a.25.25,0,0,0,.25.25h1a.25.25,0,0,0,.25-.25V3.5h3V16.75a.25.25,0,0,0,.25.25h1a.25.25,0,0,0,.25-.25V2.5a.5.5,0,0,0-.5-.5Z" />
		</svg>
	)
}
