import React from 'react'

export function RotateCCW(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx="13.3735" cy="14.994" r="0.55" />
			<circle cx="15.1735" cy="13.0605" r="0.55" />
			<circle cx="10.996" cy="16.1345" r="0.55" />
			<circle cx="8.398" cy="16.378" r="0.55" />
			<circle cx="5.856" cy="15.7095" r="0.55" />
			<circle cx="3.6835" cy="14.196" r="0.55" />
			<circle cx="2.227" cy="12.101" r="0.55" />
			<path d="M9,.9A7.974,7.974,0,0,0,3.3635,3.2305L1.65,2.05a.25.25,0,0,0-.3905.2315l.524,5.1105,4.95-1.3395a.25.25,0,0,0,.0765-.447l-1.673-1.15a6.7665,6.7665,0,0,1,4.35-1.55,6.30745,6.30745,0,0,1,6.5095,6.042v.014a7.41587,7.41587,0,0,1-.172,1.503.5025.5025,0,1,0,.9815.2A8,8,0,0,0,9,.9Z" />
		</svg>
	)
}
