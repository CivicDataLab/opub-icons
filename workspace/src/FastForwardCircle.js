import React from 'react'

export function FastForwardCircle(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1ZM5,12.5085V5.492a.5.5,0,0,1,.8125-.3905L7,6.05v5.9l-1.1875.95A.5.5,0,0,1,5,12.5085Zm9.2-3.118L9.8125,12.9A.5.5,0,0,1,9,12.5085V5.492a.5.5,0,0,1,.8125-.3905L14.2,8.61a.5.5,0,0,1,0,.7805Z" />
		</svg>
	)
}
