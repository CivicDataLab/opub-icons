import React from 'react'

export function MovieCamera(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.2,5.1,12,8.25V4.909A.909.909,0,0,0,11.091,4H2.909A.909.909,0,0,0,2,4.909v8.182A.909.909,0,0,0,2.909,14h8.182A.909.909,0,0,0,12,13.091V9.75l4.2,3.15a.5.5,0,0,0,.8-.4v-7a.5.5,0,0,0-.8-.4Z" />
		</svg>
	)
}
