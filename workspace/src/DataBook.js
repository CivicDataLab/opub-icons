import React from 'react'

export function DataBook(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<ellipse cx={9} cy="3.5" rx={8} ry="2.5" />
			<path d="M5.3,14.883a5.21248,5.21248,0,0,1,.9095-2.775l.1045-.1405C4.0585,11.704,1.6225,11.122,1,10.135V14.5c0,1.0145,1.937,1.8855,4.7145,2.2775A4.65749,4.65749,0,0,1,5.3,14.883Z" />
			<path d="M17,6.4V5.135A4.613,4.613,0,0,1,14.7355,6.4Z" />
			<path d="M9.8645,7.195c.022-.029.05-.05.0745-.078-.3325.0135-.65.0205-.9385.0205-2.468,0-7.106-.584-8-2V8.5c0,1.1745,2.5955,2.157,6.0895,2.4255Z" />
			<path d="M13.828,16.4415H9.8605A1.461,1.461,0,0,1,8.304,14.883a1.46348,1.46348,0,0,1,1.5565-1.558H14.115a.38949.38949,0,0,0,.3115-.156L17.842,8.312A.195.195,0,0,0,17.6865,8h-6.231a.38949.38949,0,0,0-.3115.156l-3.65,4.907A3.1095,3.1095,0,0,0,10.005,18h4.11a.38949.38949,0,0,0,.3115-.156l3.4155-4.857a.195.195,0,0,0-.156-.3115H16.4255Z" />
		</svg>
	)
}