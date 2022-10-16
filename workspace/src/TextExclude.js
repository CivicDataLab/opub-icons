import React from 'react'

export function TextExclude(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05ZM10,13.5a3.46749,3.46749,0,0,1,.7375-2.126l4.8885,4.8885A3.483,3.483,0,0,1,10,13.5Zm6.263,2.126-4.889-4.8885a3.483,3.483,0,0,1,4.889,4.8885Z" />
			<path d="M8.02,14S8,13.492,8,13V4h4V5.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5H.5a.5.5,0,0,0-.5.5v3A.5.5,0,0,0,.5,6h1A.5.5,0,0,0,2,5.5V4H6V14H4.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H8.605A5.46709,5.46709,0,0,1,8.02,14Z" />
		</svg>
	)
}
