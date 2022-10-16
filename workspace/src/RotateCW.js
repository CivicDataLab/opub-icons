import React from 'react'

export function RotateCW(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx="4.6265" cy="14.994" r="0.55" />
			<circle cx="2.8265" cy="13.0605" r="0.55" />
			<circle cx="7.004" cy="16.1345" r="0.55" />
			<circle cx="9.602" cy="16.378" r="0.55" />
			<circle cx="12.144" cy="15.7095" r="0.55" />
			<circle cx="14.3165" cy="14.196" r="0.55" />
			<circle cx="15.773" cy="12.101" r="0.55" />
			<path d="M9,.9a7.974,7.974,0,0,1,5.6365,2.33L16.35,2.05a.25.25,0,0,1,.3905.2315l-.524,5.1105-4.95-1.3395a.25.25,0,0,1-.0765-.447l1.673-1.15a6.7665,6.7665,0,0,0-4.35-1.55,6.30745,6.30745,0,0,0-6.5095,6.042v.014a7.41587,7.41587,0,0,0,.172,1.503.536.536,0,0,1-.35.627.54.54,0,0,1-.631-.428A8,8,0,0,1,9,.9Z" />
		</svg>
	)
}
