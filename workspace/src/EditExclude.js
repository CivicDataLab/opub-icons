import React from 'react'

export function EditExclude(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7.35,13.5a6.10848,6.10848,0,0,1,7.004-6.084l2.4-2.4a.68649.68649,0,0,0,.2-.4415.61.61,0,0,0-.175-.474L13.9,1.216a.60751.60751,0,0,0-.4335-.1765H13.45a.685.685,0,0,0-.4635.203L2.542,11.686a.5.5,0,0,0-.1255.2105L1.0275,16.55c-.057.188.2295.4255.3915.4255a.13588.13588,0,0,0,.0305-.003c.138-.0315,3.9335-1.172,4.656-1.389a.49194.49194,0,0,0,.207-.1245L7.416,14.3555A6.2004,6.2004,0,0,1,7.35,13.5ZM2.334,15.669l1.0045-3.365,2.36,2.354C4.618,14.9825,3.2675,15.3905,2.334,15.669Z" />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05ZM10,13.5a3.46708,3.46708,0,0,1,.7375-2.126l4.8885,4.8885A3.483,3.483,0,0,1,10,13.5Zm6.2625,2.126L11.374,10.7375a3.483,3.483,0,0,1,4.8885,4.8885Z" />
		</svg>
	)
}