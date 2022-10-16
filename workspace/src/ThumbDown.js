import React from 'react'

export function ThumbDown(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={9} rx="0.5" width={3} x={1} y={3} />
			<path d="M15.5385,10.945H10.555A31.9301,31.9301,0,0,1,11,15.54c0,.8305-.516,1.46-1,1.46a.9195.9195,0,0,1-1-1,5.663,5.663,0,0,0-1.258-3.129A23.17516,23.17516,0,0,0,5,10.479V3s1.4045.0165,7,0a1.973,1.973,0,0,1,1.8385,1.212l2.564,5.394a.931.931,0,0,1-.864,1.339Z" />
		</svg>
	)
}
