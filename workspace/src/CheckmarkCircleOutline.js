import React from 'react'

export function CheckmarkCircleOutline(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9.05,1.1A7.95,7.95,0,1,0,17,9.05,7.95,7.95,0,0,0,9.05,1.1Zm0,14.906A6.956,6.956,0,1,1,16.006,9.05,6.956,6.956,0,0,1,9.05,16.006Zm4.49072-9.68845-5.436,6.98773a.5.5,0,0,1-.74839.04628L4.2779,10.28586a.50035.50035,0,0,1,.00021-.70736l.66226-.66226a.5.5,0,0,1,.70709,0l1.939,1.92155,4.43735-5.701a.50006.50006,0,0,1,.70176-.08744h0l.72764.56642A.50016.50016,0,0,1,13.54072,6.31755Z" />
		</svg>
	)
}
