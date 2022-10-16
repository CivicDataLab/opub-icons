import React from 'react'

export function Data(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<ellipse cx={9} cy="3.5" rx={8} ry="2.5" />
			<path d="M9,12.1375c-2.468,0-7.106-.5845-8-2V14.5C1,15.8805,4.5815,17,9,17s8-1.1195,8-2.5V10.135C15.7765,11.6825,11.468,12.1375,9,12.1375Z" />
			<path d="M9,7.1375c-2.468,0-7.106-.5845-8-2.0025V8.5C1,9.8805,4.5815,11,9,11s8-1.1195,8-2.5V5.135C15.7765,6.6825,11.468,7.1375,9,7.1375Z" />
		</svg>
	)
}
