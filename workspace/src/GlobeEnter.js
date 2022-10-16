import React from 'react'

export function GlobeEnter(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3.6055,6.8845C3.082,4.991,4.433,4.176,4.3,2.558A8.03649,8.03649,0,0,0,1.0325,9c0,4.556,3.9715,7.271,6.777,7.866a3.447,3.447,0,0,0,.5225.083c1-2.55-.886-5.3945-2.1315-7.247C5.164,8.159,4.2215,9.1135,3.6055,6.8845Z" />
			<path d="M11.946,10.9205l.9315-.964a1.22151,1.22151,0,0,1,.9035-.389,1.25251,1.25251,0,0,1,1.25,1.25V11.84h1.45A7.797,7.797,0,0,0,17,9.6915a1.19655,1.19655,0,0,1-.5765-.176c-.8055-.3065-1.496.7375-1.557-2.082a2.883,2.883,0,0,1,.833-2,1.55006,1.55006,0,0,1,.365-.1745c-.0955-.1745-.2-.342-.31-.509-.0185.0095-.035.022-.0545.031-.625.2915-.7115.3775-1,0a.788.788,0,0,1,.1735-1.163A7.9925,7.9925,0,0,0,9.046,1.0075c1.0135.014,2.223.765,1.6065,1.9645.093-.1905-2.0135-.645-2.3-.645-.386,0,.7875-1.4445.68-1.3195A8.04307,8.04307,0,0,0,5.725,1.719c.547.353,1.156.23,1.772.382a1.50711,1.50711,0,0,1,.55.226,1.85559,1.85559,0,0,0-.55-.226c-.909-.1055.44,2.3885.3885,2.057a1.152,1.152,0,0,1,2.283-.0735A1.872,1.872,0,0,1,9.75,5.217c-.7055.927-.85,2.577-1.2,2.155-3.2955-1.35-2.9325.4355-1.85,1.629,1.732,1.91.853.196,3.121,1.196A17.47357,17.47357,0,0,0,11.946,10.9205Z" />
			<path d="M10.306,16.03a12.29236,12.29236,0,0,1-1.15.97c.239-.0065,1-.0825,1.1555-.108.2385-.039.472-.0905.703-.15Z" />
			<path d="M13.563,10.65a.25.25,0,0,1,.437.166v2.0225h3.5a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5H14V17.75a.25.25,0,0,1-.437.166L10,14.3405Z" />
		</svg>
	)
}