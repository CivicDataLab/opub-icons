import React from 'react'

export function Box(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M8.2,17.797,1.4115,14.0255A.8.8,0,0,1,1,13.326V6.597l7.2,4Z" />
			<path d="M16.5885,14.0255,9.8,17.797v-7.2l7.2-4v6.729A.8.8,0,0,1,16.5885,14.0255Z" />
			<path d="M12.3185,1.8585,9.381.2675a.8.8,0,0,0-.762,0L1.296,4.234a.4125.4125,0,0,0,0,.7255L4.0605,6.457Z" />
			<path d="M16.704,4.234,13.985,2.7615l-8.2575,4.6L9,9.1325l7.704-4.173a.4125.4125,0,0,0,0-.7255Z" />
		</svg>
	)
}
