import React from 'react'

export function GraphTrend(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5465,3.0305l-4.07,5.687L10.45,4.6605a.25.25,0,0,0-.4585.0265l-2.725,7.496L5.226,10.1425a.25.25,0,0,0-.337-.0155L1.09,13.2895a.25.25,0,0,0-.09.192v2.094a.25.25,0,0,0,.4145.188l3.524-3.0785,2.854,2.854a.25.25,0,0,0,.4115-.0915l2.274-6.255L12,12.2405a.25.25,0,0,0,.4285.0315L16.955,5.808A.25.25,0,0,0,17,5.665V3.176a.25.25,0,0,0-.4535-.1455Z" />
		</svg>
	)
}
