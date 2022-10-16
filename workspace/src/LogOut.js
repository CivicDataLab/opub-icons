import React from 'react'

export function LogOut(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={9} rx="0.5" width={2} x={8} />
			<path d="M12.6075,2.5315l-.57.9115a.505.505,0,0,0,.1685.692,5.869,5.869,0,1,1-6.41,0,.5.5,0,0,0,.16917-.68657L5.964,3.4465,5.392,2.531a.5.5,0,0,0-.68667-.16877L4.7,2.3655a7.95,7.95,0,1,0,8.5955,0,.5.5,0,0,0-.68753.16523Z" />
		</svg>
	)
}
