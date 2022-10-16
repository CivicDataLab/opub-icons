import React from 'react'

export function BranchCircle(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx={12} cy={12} r={1} />
			<circle cx={12} cy={6} r={1} />
			<path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1ZM7.1,9a2.09968,2.09968,0,0,1-.0345.3415l3.2635,1.4a2.21249,2.21249,0,1,1-.395.9185L6.67,10.26a2.1,2.1,0,1,1,0-2.52l3.264-1.4a2.1095,2.1095,0,1,1,.3955.9185l-3.264,1.4A2.09968,2.09968,0,0,1,7.1,9Z" />
		</svg>
	)
}