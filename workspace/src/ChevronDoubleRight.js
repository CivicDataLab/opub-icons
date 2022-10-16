import React from 'react'

export function ChevronDoubleRight(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15,9a.994.994,0,0,1-.2925.7045l-3.9915,3.99a1,1,0,1,1-1.4355-1.386l.0245-.0245L12.5905,9,9.3045,5.715A1,1,0,0,1,10.691,4.28l.0245.0245,3.9915,3.99A.994.994,0,0,1,15,9Z" />
			<path d="M9,9a.994.994,0,0,1-.2925.7045l-3.9915,3.99a1,1,0,1,1-1.436-1.385l.0245-.0245L6.5905,9,3.3045,5.715A1,1,0,0,1,4.6915,4.28l.0245.0245,3.9915,3.99A.994.994,0,0,1,9,9Z" />
		</svg>
	)
}
