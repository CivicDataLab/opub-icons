import React from 'react'

export function AutomatedSegment(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.257,7.1685l.039,1.124a.917.917,0,0,0,.4695.7665l.9815.55-1.124.039a.917.917,0,0,0-.7665.4695l-.55.9815L15.267,9.975a.915.915,0,0,0-.4695-.7665L13.817,8.661l1.124-.0395A.915.915,0,0,0,15.71,8.15Z" />
			<path d="M3.4.522l.0565,1.567a1.278,1.278,0,0,0,.65,1.0685l1.368.766L3.9115,3.98a1.2765,1.2765,0,0,0-1.0685.6525L2.077,6,2.0205,4.4335A1.2765,1.2765,0,0,0,1.368,3.365L0,2.6l1.5665-.057A1.276,1.276,0,0,0,2.635,1.89Z" />
			<path d="M13,4.7825A.7825.7825,0,0,0,12.2175,4H7v.5645a.74.74,0,0,1-.683.781l-2.3.0905a.60351.60351,0,0,0-.512.3275L3,6.75v9.47a.7825.7825,0,0,0,.7825.78h8.435A.7825.7825,0,0,0,13,16.2175ZM4,7H6.75V8H4ZM4,9H8.5v1H4Zm0,2H9.375v1H4Zm8,3H4V13h8Z" />
			<path d="M14.137,0l.15,1.1145a.915.915,0,0,0,.5425.717l1.03.45-1.1145.15a.917.917,0,0,0-.717.5425L13.5775,4l-.15-1.1145a.917.917,0,0,0-.5425-.717l-1.0295-.45,1.115-.15a.915.915,0,0,0,.718-.5385Z" />
		</svg>
	)
}