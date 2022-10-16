import React from 'react'

export function GraphSunburst(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M5.503,7.92H7.1675a.247.247,0,0,0,.204-.113,2,2,0,0,1,.5375-.538.247.247,0,0,0,.113-.204V5.4a.25.25,0,0,0-.324-.2395,3.994,3.994,0,0,0-2.435,2.435.25.25,0,0,0,.24.3245Z" />
			<path d="M9.3805,12.9045a4.03651,4.03651,0,0,0,3.626-3.625A3.988,3.988,0,0,0,10.365,5.168a.25251.25251,0,0,0-.3425.2335V7.065a.25.25,0,0,0,.1135.2055,1.993,1.993,0,1,1-2.764,2.764.25.25,0,0,0-.2055-.1135H5.5035a.25.25,0,0,0-.2335.3425A3.988,3.988,0,0,0,9.3805,12.9045Z" />
			<path d="M10.196,2.124V3.65a.247.247,0,0,0,.192.2395,5.0085,5.0085,0,0,1,3.808,4.856,4.45769,4.45769,0,0,1-.055.6615.25.25,0,0,0,.1545.271l1.4315.5635a.25.25,0,0,0,.3385-.181A6.85421,6.85421,0,0,0,16.196,8.745a7.0055,7.0055,0,0,0-5.706-6.87.25.25,0,0,0-.294.249Z" />
			<path d="M5.009,3.572l.397.397A.246.246,0,0,0,5.7175,4a5.95851,5.95851,0,0,1,2.104-.871.24649.24649,0,0,0,.2-.2405V2.3a.25.25,0,0,0-.295-.25,6.94506,6.94506,0,0,0-2.688,1.14.25.25,0,0,0-.0295.382ZM2.4,7.92h.5235a.2465.2465,0,0,0,.24-.2A5.95,5.95,0,0,1,4.02,5.6955a.2465.2465,0,0,0-.029-.3125l-.387-.387a.25.25,0,0,0-.3845.033A6.95438,6.95438,0,0,0,2.15,7.6255.25.25,0,0,0,2.4,7.92Z" />
			<path d="M3.5615,9.92H2.4a.25.25,0,0,0-.25.295,7.01,7.01,0,0,0,5.5775,5.577.25249.25249,0,0,0,.295-.25V14.45a.247.247,0,0,0-.1955-.24A5.34251,5.34251,0,0,1,3.8,10.119.247.247,0,0,0,3.5615,9.92Zm9.901,2.0365a5.33486,5.33486,0,0,1-3.245,2.2525.25.25,0,0,0-.196.2405V15.541a.2525.2525,0,0,0,.295.25,7.009,7.009,0,0,0,4.6245-3.15.25.25,0,0,0-.124-.3655l-1.058-.4165A.25.25,0,0,0,13.4625,11.9565Z" />
		</svg>
	)
}
