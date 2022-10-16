import React from 'react'

export function Train(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15,0H3A2,2,0,0,0,1,2V12a2,2,0,0,0,2,2H4.9881L3.25476,18H4.57855l.43335-1h7.9762l.43335,1h1.32379L13.0119,14H15a2,2,0,0,0,2-2V2a1.99994,1.99994,0,0,0-1.99988-2ZM4,12.5A1.5,1.5,0,1,1,5.5,11,1.5,1.5,0,0,1,4,12.5ZM5.44525,16l.86664-2h5.37622l.8667,2ZM3.5,8A.5.5,0,0,1,3,7.5V2H15V7.5a.5.5,0,0,1-.5.5ZM14,12.5A1.5,1.5,0,1,1,15.5,11,1.5,1.5,0,0,1,14,12.5Z" />
		</svg>
	)
}
