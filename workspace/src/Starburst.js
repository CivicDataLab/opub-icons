import React from 'react'

export function Starburst(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9.05,1.6625,10.31,5.206l3.3965-1.6145a.25.25,0,0,1,.333.333L12.425,7.321l3.5435,1.26a.25.25,0,0,1,0,.471l-3.5435,1.26,1.6145,3.3965a.25.25,0,0,1-.333.333L10.31,12.427,9.05,15.971a.25.25,0,0,1-.471,0l-1.26-3.5435L3.9245,14.042a.25.25,0,0,1-.333-.333L5.206,10.3125,1.6625,9.05a.25.25,0,0,1,0-.471L5.206,7.319,3.5915,3.9245a.25.25,0,0,1,.333-.333L7.321,5.206l1.26-3.5435a.25.25,0,0,1,.469,0Z" />
		</svg>
	)
}