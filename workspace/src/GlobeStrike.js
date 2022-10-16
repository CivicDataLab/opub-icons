import React from 'react'

export function GlobeStrike(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3.573,6.8845a3.02993,3.02993,0,0,1-.105-.9415L2.2545,4.729A8.0085,8.0085,0,0,0,1,9c0,4.556,3.9715,7.271,6.777,7.866a3.44443,3.44443,0,0,0,.523.084c1-2.55-.886-5.3945-2.1315-7.247C5.1315,8.159,4.189,9.1135,3.573,6.8845ZM9.1245,17c.239-.0065,1-.0825,1.1555-.108a7.80367,7.80367,0,0,0,2.9795-1.158l-1.543-1.543A8.7824,8.7824,0,0,1,9.1245,17Zm7.266-7.4845c-.8055-.3065-1.496.7375-1.557-2.082a2.883,2.883,0,0,1,.833-2,1.55006,1.55006,0,0,1,.365-.1745c-.096-.1745-.2-.342-.31-.509-.0185.0095-.035.022-.0545.031-.625.2915-.7115.3775-1,0a.788.788,0,0,1,.1735-1.163A7.992,7.992,0,0,0,9.013,1.0075c1.0135.014,2.223.765,1.6065,1.9645.093-.1905-2.0135-.645-2.3-.645-.386,0,.7875-1.4445.68-1.3195A8.04239,8.04239,0,0,0,5.692,1.719c.547.353,1.1555.23,1.772.382a1.50711,1.50711,0,0,1,.55.226,1.85559,1.85559,0,0,0-.55-.226c-.909-.1055.44,2.3885.3885,2.057a1.15173,1.15173,0,0,1,2.2825-.0735A1.871,1.871,0,0,1,9.7165,5.217a5.09631,5.09631,0,0,0-.657,1.3685l6.668,6.6675a7.93448,7.93448,0,0,0,1.24-3.5615A1.19649,1.19649,0,0,1,16.3905,9.5155Z" />
			<rect
				height="21.1215"
				rx="0.2545"
				transform="translate(-3.74149 9.03259) rotate(-45)"
				width="1.5"
				x="8.28256"
				y="-1.52807"
			/>
		</svg>
	)
}