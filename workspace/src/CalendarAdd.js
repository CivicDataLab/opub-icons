import React from 'react'

export function CalendarAdd(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} width={2} x={3} y={6} />
			<rect height={2} width={2} x={6} y={6} />
			<rect height={2} width={2} x={9} y={6} />
			<rect height={2} width={2} x={3} y={9} />
			<rect height={2} width={2} x={6} y={9} />
			<rect height={2} width={2} x={3} y={12} />
			<path d="M7.35,13.5A6.13738,6.13738,0,0,1,7.542,12H6v2H7.375C7.362,13.835,7.35,13.669,7.35,13.5Z" />
			<path d="M13.5,7.35c.169,0,.3345.012.5.025V6H12V7.542A6.14229,6.14229,0,0,1,13.5,7.35Z" />
			<path d="M7.8845,16H1V4H3v.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,5,4.5V4h7v.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h2V7.8845a6.12921,6.12921,0,0,1,1,.562V3.5a.5.5,0,0,0-.5-.5H14V1.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V3H5V1.5A.5.5,0,0,0,4.5,1h-1a.5.5,0,0,0-.5.5V3H.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5H8.4465A6.1418,6.1418,0,0,1,7.8845,16Z" />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05Zm2.5,4.7a.25.25,0,0,1-.25.25H14v1.75a.25.25,0,0,1-.25.25h-.5a.25.25,0,0,1-.25-.25V14H11.25a.25.25,0,0,1-.25-.25v-.5a.25.25,0,0,1,.25-.25H13V11.25a.25.25,0,0,1,.25-.25h.5a.25.25,0,0,1,.25.25V13h1.75a.25.25,0,0,1,.25.25Z" />
		</svg>
	)
}
