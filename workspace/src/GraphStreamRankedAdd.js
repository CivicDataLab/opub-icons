import React from 'react'

export function GraphStreamRankedAdd(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14,1.75c-1.368,0-1.634,1.9-1.8595,4.588-.034.403-.072.8045-.116,1.2A6.15012,6.15012,0,0,1,13.5,7.35c.026,0,.05.0035.0765.004A2.8,2.8,0,0,1,16,6.25h1V1.75ZM5,13.25a8.39984,8.39984,0,0,0,2.216-.3645l.17-.042a6.1,6.1,0,0,1,.864-2.536A9.76222,9.76222,0,0,1,7.1415,9.639,3.75047,3.75047,0,0,0,5,8.75a2.554,2.554,0,0,0-1.843.923A3.10226,3.10226,0,0,1,1,10.75v1.5a4.35,4.35,0,0,1,1.963.508A4.25009,4.25009,0,0,0,5,13.25Zm0,1.5c-1.965,0-3.4805-1-4-1V17H8.4465A6.11242,6.11242,0,0,1,7.42,14.3805,9.16989,9.16989,0,0,1,5,14.75ZM10,6C8.3645,6,7.1925,4,5,4,2.01,4,2.336,6,1,6V9.25c.384,0,.669-.246,1.1405-.6795A3.992,3.992,0,0,1,5,7.25,5.10953,5.10953,0,0,1,7.9835,8.4a6.00927,6.00927,0,0,0,1.2345.6935,6.16026,6.16026,0,0,1,1.2-.908c.1145-.6685.185-1.4885.2255-1.9705.0195-.2285.04-.4665.0625-.707A.92.92,0,0,1,10,6Z" />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05Zm2.5,4.7a.25.25,0,0,1-.25.25H14v1.75a.25.25,0,0,1-.25.25h-.5a.25.25,0,0,1-.25-.25V14H11.25a.25.25,0,0,1-.25-.25v-.5a.25.25,0,0,1,.25-.25H13V11.25a.25.25,0,0,1,.25-.25h.5a.25.25,0,0,1,.25.25V13h1.75a.25.25,0,0,1,.25.25Z" />
		</svg>
	)
}