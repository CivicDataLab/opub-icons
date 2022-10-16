import React from 'react'

export function Graphic(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,7H12V.6925a.241.241,0,0,0-.23183-.24983L11.7595.4425H11.75a.247.247,0,0,0-.175.0735L.5455,11.573A.25.25,0,0,0,.7225,12h4.419a3.98211,3.98211,0,0,0,7.3035,3H16.5a.5.5,0,0,0,.5-.5v-7A.5.5,0,0,0,16.5,7ZM2.414,11,11,2.414V7H9.5a.5.5,0,0,0-.5.5V9a3.98351,3.98351,0,0,0-3.4455,2ZM9,16a3,3,0,1,1,3-3A3,3,0,0,1,9,16Z" />
		</svg>
	)
}
