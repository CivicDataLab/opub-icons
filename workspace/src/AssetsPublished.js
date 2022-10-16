import React from 'react'

export function AssetsPublished(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9.6185,13.4l4.542,2.5315a.4095.4095,0,0,0,.54967-.18234l.00033-.00066,3.2425-8.073Z" />
			<path d="M8.0415,13.8815V17.6a.25.25,0,0,0,.412.1905l2.66-2.2625Z" />
			<path d="M3.831,12H2V2H16V5.9l.98-.3055H17V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5H5.8335Z" />
			<path d="M17.3955,6.7675,4.539,10.722a.2045.2045,0,0,0-.033.3795L8.063,12.841Z" />
		</svg>
	)
}
