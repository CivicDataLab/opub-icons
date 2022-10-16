import React from 'react'

export function FilterHeart(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7.4,13.5A6.573,6.573,0,0,1,9,9.2945c1.0415-1.347,5.8665-7.486,5.8665-7.486A.5.5,0,0,0,14.473,1H.527a.5.5,0,0,0-.3935.8085L6,9.2945V16.95a.496.496,0,0,0,.84.4125L8.009,16.143A6.06548,6.06548,0,0,1,7.4,13.5Z" />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05Zm0,7.95S10,14.3,10,12.8635a1.909,1.909,0,0,1,1.909-1.909,2.003,2.003,0,0,1,1.591.9545,2.003,2.003,0,0,1,1.591-.9545A1.909,1.909,0,0,1,17,12.8635C17,14.3,13.5,17,13.5,17Z" />
		</svg>
	)
}
