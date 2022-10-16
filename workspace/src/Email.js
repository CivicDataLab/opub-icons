import React from 'react'

export function Email(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,10.094l9-6.7615v-.75A.5735.5735,0,0,0,17.4375,2H.5625A.57351.57351,0,0,0,0,2.5835V3.318Z" />
			<polygon points="12.389 8.981 18 13.184 18 6.667 18 4.771 12.389 8.981" />
			<path d="M11.433,9.7,9.645,11.047a1.086,1.086,0,0,1-1.29,0L6.541,9.6875,0,14.534v.883A.573.573,0,0,0,.5625,16h16.875A.573.573,0,0,0,18,15.417v-.795Z" />
			<polygon points="5.582 8.969 0 4.756 0 6.667 0 13.097 5.582 8.969" />
		</svg>
	)
}
