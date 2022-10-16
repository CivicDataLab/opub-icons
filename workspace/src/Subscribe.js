import React from 'react'

export function Subscribe(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<polygon points="12.389 10.981 18 15.184 18 8.667 18 6.771 12.389 10.981" />
			<path d="M11.433,11.7,9.645,13.047a1.086,1.086,0,0,1-1.29,0L6.541,11.6875,0,16.534A.4905.4905,0,0,0,.5,17h17a.442.442,0,0,0,.49966-.37558L18,16.622Z" />
			<polygon points="5.582 10.969 0 6.755 0 8.667 0 15.097 5.582 10.969" />
			<path d="M9.5335.336a1,1,0,0,0-1.0665,0L0,5.6825V7H3V4.5A.5.5,0,0,1,3.5,4h11a.5.5,0,0,1,.5.5V7h3V5.6675Z" />
			<rect height={1} rx="0.25" width={8} x={5} y={6} />
			<path d="M10.915,10H7.085a.25.25,0,0,1-.15-.05l-.941-.724A.125.125,0,0,1,6.0675,9h5.865a.125.125,0,0,1,.076.224l-.941.726A.25.25,0,0,1,10.915,10Z" />
		</svg>
	)
}