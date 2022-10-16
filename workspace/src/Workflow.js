import React from 'react'

export function Workflow(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height="5.6" rx="0.5" width={4} x={1} y={6} />
			<rect height={3} rx="0.5" width={3} x={14} y={2} />
			<rect height={3} rx="0.5" width={3} x={14} y={7} />
			<rect height={3} rx="0.5" width={3} x={14} y={12} />
			<path d="M13,3.75v-.5A.25.25,0,0,0,12.75,3H9.25A.25.25,0,0,0,9,3.25V8H6.25A.25.25,0,0,0,6,8.25v.5A.25.25,0,0,0,6.25,9H9v4.75a.25.25,0,0,0,.25.25h3.5a.25.25,0,0,0,.25-.25v-.5a.25.25,0,0,0-.25-.25H10V9h2.75A.25.25,0,0,0,13,8.75v-.5A.25.25,0,0,0,12.75,8H10V4h2.75A.25.25,0,0,0,13,3.75Z" />
		</svg>
	)
}
