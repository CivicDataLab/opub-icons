import React from 'react'

export function Revert(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.5" width={16} x={1} y={13} />
			<path d="M1.25,10H6.625A.4.4,0,0,0,7,9.6a.392.392,0,0,0-.1175-.28L4.905,7.3405l.346-.3465a5.7235,5.7235,0,0,1,9.558,2.537A.6075.6075,0,0,0,15.39,10h.947a.5.5,0,0,0,.4955-.585A7.715,7.715,0,0,0,7.66626,3.497q-.17886.03852-.35576.08549A8.09051,8.09051,0,0,0,3.6685,5.75l-.178.1785L1.682,4.118A.39051.39051,0,0,0,1.4,4a.4.4,0,0,0-.4.377V9.75A.25.25,0,0,0,1.25,10Z" />
		</svg>
	)
}
