import React from 'react'

export function BookmarkSmallOutline(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M11,4v8.957l-1.79-1.75-.7-.682-.7.68L6,12.972V4Zm.5-1h-6a.5.5,0,0,0-.5.5V14.753a.2615.2615,0,0,0,.153.228.21049.21049,0,0,0,.1.022.25554.25554,0,0,0,.176-.074l3.087-3.005,3.061,2.994a.25.25,0,0,0,.176.072.236.236,0,0,0,.1-.019A.25.25,0,0,0,12,14.744V3.5A.5.5,0,0,0,11.5,3Z" />
		</svg>
	)
}