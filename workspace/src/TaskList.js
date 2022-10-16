import React from 'react'

export function TaskList(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M1,1.5v14a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V1.5a.5.5,0,0,0-.5-.5H1.5A.5.5,0,0,0,1,1.5ZM16,15H2V2H16Z" />
			<path d="M4.775,7.9585a.5.5,0,0,1-.3395-.133L3.397,6.867a.50015.50015,0,1,1,.6785-.735l.6555.6055L6.871,4.218a.50079.50079,0,1,1,.762.65L5.156,7.7845a.5.5,0,0,1-.35.1755Z" />
			<path d="M4.775,12.9585a.5.5,0,0,1-.3395-.133L3.397,11.867a.50015.50015,0,0,1,.6785-.735l.6555.6055L6.871,9.218a.50079.50079,0,1,1,.762.65L5.156,12.7845a.5.5,0,0,1-.35.1755Z" />
			<rect height={2} rx="0.25" width={5} x={9} y={5} />
			<rect height={2} rx="0.25" width={5} x={9} y={10} />
		</svg>
	)
}