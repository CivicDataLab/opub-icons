import React from 'react'

export function Blur(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7.4545.1735C8.1305,4.8095,3.591,8.4355,3.591,12.15A5.22669,5.22669,0,0,0,9,17.173a5.22734,5.22734,0,0,0,5.409-5.023C14.409,8.3165,8.662,4.2785,7.4545.1735Z" />
		</svg>
	)
}
