import React from 'react'

export function RewindCircle(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1A8,8,0,1,1,1,9,8,8,0,0,1,9,1Zm1,9.955,1.4305,1.25a.5.5,0,0,0,.8295-.3765V6.1245a.5.5,0,0,0-.8295-.3765L10,7Zm-1.829,1.25A.5.5,0,0,0,9,11.831V6.124a.5.5,0,0,0-.829-.376L4.4795,8.9775Z" />
		</svg>
	)
}
