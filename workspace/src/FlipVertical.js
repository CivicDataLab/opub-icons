import React from 'react'

export function FlipVertical(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={1} rx="0.25" width={1} x={1} y={8} />
			<rect height={1} rx="0.25" width={1} x={3} y={8} />
			<rect height={1} rx="0.25" width={1} x={5} y={8} />
			<rect height={1} rx="0.25" width={1} x={7} y={8} />
			<rect height={1} rx="0.25" width={1} x={9} y={8} />
			<rect height={1} rx="0.25" width={1} x={11} y={8} />
			<rect height={1} rx="0.25" width={1} x={13} y={8} />
			<rect height={1} rx="0.25" width={1} x={15} y={8} />
			<path d="M2.65,15.1245l5.45-5.036a.505.505,0,0,1,.714,0l5.536,5.036a.505.505,0,0,1-.357.862H3.006a.505.505,0,0,1-.356-.862Z" />
			<path d="M12.9605,1.909,8.539,5.993,4.05,1.909ZM14.5,1.5085A.5045.5045,0,0,0,13.99952,1H3.006a.5045.5045,0,0,0-.506.503l0,.006a.4935.4935,0,0,0,.15.353L8.1835,6.9a.505.505,0,0,0,.714,0L14.35,1.862A.49451.49451,0,0,0,14.5,1.5085Z" />
		</svg>
	)
}
