import React from 'react'

export function ThumbUp(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={9} rx="0.5" width={3} x={1} y={7} />
			<path d="M15.4835,7H10.5A27.46988,27.46988,0,0,0,11,2.46C11,1.6295,10.484,1,10,1A.9195.9195,0,0,0,9,2,5.663,5.663,0,0,1,7.742,5.129,23.17516,23.17516,0,0,1,5,7.521V15s1.4045-.0165,7,0a1.973,1.973,0,0,0,1.8385-1.212l2.564-5.394A1,1,0,0,0,15.4835,7Z" />
		</svg>
	)
}
