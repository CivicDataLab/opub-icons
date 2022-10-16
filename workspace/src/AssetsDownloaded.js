import React from 'react'

export function AssetsDownloaded(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M6,12H2V2H16V7.812a6.023,6.023,0,0,1,1,.729V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5H7a5.98723,5.98723,0,0,1,.0905-1Z" />
			<path d="M13,8.025A4.975,4.975,0,1,0,17.975,13,4.975,4.975,0,0,0,13,8.025Zm-.085,8.0905-2.695-2.682A.25.25,0,0,1,10.3895,13H12V10.25a.25.25,0,0,1,.25-.25h1.5a.25.25,0,0,1,.25.25V13h1.6105a.25.25,0,0,1,.1695.4335l-2.695,2.682A.125.125,0,0,1,12.915,16.1155Z" />
		</svg>
	)
}
