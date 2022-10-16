import React from 'react'

export function Alia(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14.6205,1H6.4a.4.4,0,0,0-.4.4v.003a.39252.39252,0,0,0,.118.28l1.75,1.75A28.53531,28.53531,0,0,0,5.147,8.2785a14.61778,14.61778,0,0,0-1.087,4.243c-.041.4265-.06.85-.06,1.268a14.944,14.944,0,0,0,.288,2.8765.4135.4135,0,0,0,.809.0115L5.1,16.666a12.67268,12.67268,0,0,1,1.297-3.4595,11.35858,11.35858,0,0,1,2.15-2.7145,24.28717,24.28717,0,0,1,3.665-2.7145L14.3165,9.882a.39252.39252,0,0,0,.28.118A.4.4,0,0,0,15,9.60351L15,9.6V1.3795A.40349.40349,0,0,0,14.6205,1Z" />
		</svg>
	)
}
