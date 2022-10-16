import React from 'react'

export function BoxImport(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.6425,2.1,10.861.5915a.7575.7575,0,0,0-.7215,0L3.2045,4.35a.3905.3905,0,0,0,0,.6865L5.8225,6.45Z" />
			<path d="M17.7955,4.35,15.221,2.953,7.4,7.3075,10.5,8.986l7.2955-3.95a.3905.3905,0,0,0,0-.686Z" />
			<path d="M11,10.4855v7.2l6.5885-3.66a.8.8,0,0,0,.4115-.7V6.5965Z" />
			<path d="M3,6.5965v1.332L8.823,13.75a.25.25,0,0,1,0,.3535l-1.881,1.881L10,17.6855v-7.2Z" />
			<path d="M3,12V10.336a.25.25,0,0,1,.433-.1705L7,14,3.433,17.8345A.25.25,0,0,1,3,17.664V16H.5a.5.5,0,0,1-.5-.5v-3A.5.5,0,0,1,.5,12Z" />
		</svg>
	)
}
