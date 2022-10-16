import React from 'react'

export function FileCSV(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<polygon points="10 1 10 6 15 6 10 1" />
			<path d="M9.5,7A.5.5,0,0,1,9,6.5V1H3.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V7ZM5.396,15.4795A.36349.36349,0,0,1,5.00146,15.15L5,15.118V14.95a.325.325,0,0,1,.2285-.336c.712-.125,1.568-.634,1.568-1.3155a2.166,2.166,0,1,1,2.5345-2.134A4.168,4.168,0,0,1,5.396,15.4795Z" />
		</svg>
	)
}
