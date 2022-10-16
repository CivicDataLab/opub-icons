import React from 'react'

export function FolderOpen(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15,7V4.5a.5.5,0,0,0-.5-.5l-6.166.004-1.65-1.7A1,1,0,0,0,5.9645,2H2A1,1,0,0,0,1,3V14.5a.5.5,0,0,0,.5.5H14.6535a.5.5,0,0,0,.468-.3245l2.625-7A.5.5,0,0,0,17.2785,7ZM2,3H5.9645L7.617,4.7l.295.3035h.4225L14,5V7H4.3465a.5.5,0,0,0-.468.3245L2,12.3335Z" />
		</svg>
	)
}
