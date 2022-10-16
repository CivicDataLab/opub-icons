import React from 'react'

export function Retweet(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M6,12V7H7a.25.25,0,0,0,.2-.4L4.5,3,1.8,6.6A.25.25,0,0,0,2,7H3v5a3,3,0,0,0,3,3h6L9.6205,12Z" />
			<path d="M16,11H15V6a3,3,0,0,0-3-3H6L8.3675,6H12v5H11a.25.25,0,0,0-.2.4L13.5,15l2.7-3.6A.25.25,0,0,0,16,11Z" />
		</svg>
	)
}
