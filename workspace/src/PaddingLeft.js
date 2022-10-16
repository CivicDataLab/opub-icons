import React from 'react'

export function PaddingLeft(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16,16H2V2H16Zm1,.5V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h15A.5.5,0,0,0,17,16.5Z" />
			<rect height={12} rx="0.25" width={4} x={3} y={3} />
		</svg>
	)
}
