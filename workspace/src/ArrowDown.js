import React from 'react'

export function ArrowDown(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M12,10V1.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5V10H2.5035a.25.25,0,0,0-.177.427L9,17.1l6.673-6.673A.25.25,0,0,0,15.4965,10Z" />
		</svg>
	)
}
