import React from 'react'

export function Watch(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M4,3a.957.957,0,0,0-1,.912Q2.998,3.956,3,4V14a1.01,1.01,0,0,0,1,1,1.056,1.056,0,0,1,1,1v1.5a.5.5,0,0,0,.5.5h7a.5.5,0,0,0,.5-.5V16a1.056,1.056,0,0,1,1-1,1.0105,1.0105,0,0,0,1-1V8h.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H15V4a.9935.9935,0,0,0-.98581-1.00113Q13.98634,2.99865,13.9585,3a.97349.97349,0,0,1-.95875-.988L13,2V.5a.5.5,0,0,0-.5-.5h-7A.5.5,0,0,0,5,.5V2A.9375.9375,0,0,1,4,3Zm9,2v8H5V5Z" />
		</svg>
	)
}
