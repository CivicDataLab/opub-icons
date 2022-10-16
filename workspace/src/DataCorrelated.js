import React from 'react'

export function DataCorrelated(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13,7c0-.2-.0105-.4-.03-.594A4.9975,4.9975,0,0,0,6.406,12.97c.1955.0195.3935.03.594.03A6,6,0,0,0,13,7Z" />
			<path d="M5,11a6,6,0,0,1,7.741-5.741,6,6,0,1,0-7.482,7.482A5.99452,5.99452,0,0,1,5,11Z" />
			<path d="M12.741,5.259a5.95325,5.95325,0,0,1,.229,1.147A5,5,0,1,1,6.406,12.97a5.95325,5.95325,0,0,1-1.147-.229,6,6,0,1,0,7.482-7.482Z" />
		</svg>
	)
}
