import React from 'react'

export function TextBaselineShift(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M10.65,11.888,6.5305,1.5c-.0185-.0645-.0355-.08-.106-.08H4.706a.08.08,0,0,0-.0876.0716L4.618,1.5a1.53653,1.53653,0,0,1-.123.656L.6725,11.872c-.017.08.018.128.105.128H1.97c.0875,0,.1235-.032.1405-.096L3.244,9H7.958l1.15,2.92a.15848.15848,0,0,0,.14.08h1.333C10.669,12,10.686,11.95,10.65,11.888ZM5.5835,2.5085H5.6C5.9325,3.5965,7.2725,6.9585,7.6585,8H3.5455C4.212,6.2395,5.285,3.5325,5.5835,2.5085Z" />
			<rect height={1} rx="0.25" width="10.5" x="0.5" y={13} />
			<rect height={1} rx="0.25" width={6} x="11.5" y={8} />
			<path d="M16.7685,5.864a4.59777,4.59777,0,0,0,.0235.574c0,.024,0,.0355-.0235.05A4.936,4.936,0,0,1,14.5325,7c-1.268,0-2.2245-.622-2.2245-1.8775,0-1.2675,1.1835-1.8295,2.667-1.8295.4415,0,.693.0125.825.024V3.03a1.18015,1.18015,0,0,0-1.35-1.1955,3.207,3.207,0,0,0-1.5185.3585.0585.0585,0,0,1-.083-.0595V1.404a.105.105,0,0,1,.0595-.0955A3.95,3.95,0,0,1,14.6035.95a2.01955,2.01955,0,0,1,2.165,2.25ZM15.8,4.106a5.70074,5.70074,0,0,0-.79-.05c-1.16,0-1.722.395-1.722,1.0645,0,.538.3715,1.0645,1.423,1.0645A2.8072,2.8072,0,0,0,15.8,5.9815Z" />
			<path d="M16.9355,12.583l-2-2a.25.25,0,0,0-.35307-.01843L14.564,10.583l-2,2a.245.245,0,0,0-.064.167.25.25,0,0,0,.25.25H14v2.5775A.4225.4225,0,0,0,14.4225,16h.655a.4225.4225,0,0,0,.4225-.4225V13h1.25a.25.25,0,0,0,.25-.25A.245.245,0,0,0,16.9355,12.583Z" />
		</svg>
	)
}
