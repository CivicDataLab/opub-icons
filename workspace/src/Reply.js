import React from 'react'

export function Reply(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7.5145,5H7V2.4A.4.4,0,0,0,6.6,2H6.597a.39252.39252,0,0,0-.28.118L1.1035,7.732a.4.4,0,0,0,0,.536L6.317,13.882a.39252.39252,0,0,0,.28.118A.4.4,0,0,0,7,13.603V11a9.855,9.855,0,0,1,9.3955,3.405.335.335,0,0,0,.6045-.2C17,12.7265,15.366,5,7.5145,5Z" />
		</svg>
	)
}
