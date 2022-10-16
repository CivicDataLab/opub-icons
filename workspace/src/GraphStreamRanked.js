import React from 'react'

export function GraphStreamRanked(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M11.21,13.766c-3.1175.1255-4.124.984-6.21.984-1.9645,0-3.4805-1-4-1V17H17V14.75C13.2225,14.75,12.21,13.9,11.21,13.766Z" />
			<path d="M5,7.25A5.10953,5.10953,0,0,1,7.9835,8.4,3.60627,3.60627,0,0,0,10,9.25c.3895,0,.5695-2.129.6455-3.038.0195-.2285.04-.4665.0625-.707A.92.92,0,0,1,10,6C8.3645,6,7.1925,4,5,4,2.01,4,2.336,6,1,6V9.25c.384,0,.669-.246,1.1405-.6795A3.992,3.992,0,0,1,5,7.25Z" />
			<path d="M12.1405,6.338C11.958,8.507,11.7685,10.75,10,10.75A4.9425,4.9425,0,0,1,7.1425,9.6385,3.75875,3.75875,0,0,0,5,8.75a2.554,2.554,0,0,0-1.843.923A3.10226,3.10226,0,0,1,1,10.75v1.5a4.35,4.35,0,0,1,1.963.508A4.25009,4.25009,0,0,0,5,13.25a8.39984,8.39984,0,0,0,2.216-.3645A17.25707,17.25707,0,0,1,11,12.276a1.68746,1.68746,0,0,1,.2235-.011c.247-.009.504-.015.7765-.015.328,0,.468-.3925.65-1.827.21-1.662.5275-4.173,3.35-4.173h1V1.75H14C12.632,1.75,12.366,3.65,12.1405,6.338Z" />
			<path d="M14.1365,10.6105a6.04111,6.04111,0,0,1-.6,2.2675A13.60585,13.60585,0,0,0,17,13.25V7.75H16C14.6405,7.75,14.3875,8.622,14.1365,10.6105Z" />
		</svg>
	)
}
