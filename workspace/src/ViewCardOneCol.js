import React from 'react'

export function ViewCardOneCol(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<g id="ImportedIcons">
				<path d="M1.5,17h15a.5.5,0,0,0,.5-.5V14H1v2.5A.5.5,0,0,0,1.5,17Z" />
				<path d="M16.5,1H1.5a.5.5,0,0,0-.5.5V4H17V1.5A.5.5,0,0,0,16.5,1Z" />
				<rect height={6} width={16} x={1} y={6} />
			</g>
		</svg>
	)
}
