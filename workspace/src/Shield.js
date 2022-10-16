import React from 'react'

export function Shield(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15,1.5a.5.5,0,0,0-.5-.5H3.5a.5.5,0,0,0-.5.5V8.05a7.804,7.804,0,0,0,2.9285,6.0935l2.837,2.1775a.35.35,0,0,0,.4685,0l2.837-2.1775A7.804,7.804,0,0,0,15,8.05ZM4.861,11.1435A7.24092,7.24092,0,0,1,4,8V2H14Z" />
		</svg>
	)
}
