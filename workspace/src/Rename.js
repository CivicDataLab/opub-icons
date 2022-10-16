import React from 'react'

export function Rename(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect width={1} x="15.5" />
			<path d="M12.794,15.85,7.8165,2.105C7.796,2.0205,7.7755,2,7.691,2H5.6145a.1.1,0,0,0-.105.09474V2.105a2.282,2.282,0,0,1-.15.8695L.7425,15.831C.722,15.936.765,16,.87,16H2.31a.15.15,0,0,0,.169-.1275L4.045,11.5H9.35l1.5805,4.395A.188.188,0,0,0,11.1,16h1.609C12.816,16,12.837,15.936,12.794,15.85ZM6.6735,3.44H6.694C7.0735,4.7935,8.3715,8.426,8.914,10H4.479C5.274,7.708,6.331,4.727,6.6735,3.44Z" />
		</svg>
	)
}
