import React from 'react'

export function PaddingRight(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M2,1.5H16v14H2Zm-.5,15h15A.5.5,0,0,0,17,16V1a.5.5,0,0,0-.5-.5H1.5A.5.5,0,0,0,1,1V16A.5.5,0,0,0,1.5,16.5Z" />
			<rect height={12} rx="0.25" width={4} x={11} y="2.5" />
		</svg>
	)
}
