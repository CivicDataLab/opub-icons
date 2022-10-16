import React from 'react'

export function AssetsModified(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M6.507,12.9705,7.4775,12H2V2H16V4.991a1.59436,1.59436,0,0,1,.5115.344L17,5.8235V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5H6.484C6.4925,12.991,6.5,12.9795,6.507,12.9705Z" />
			<path d="M17.8225,8.3425,15.661,6.181a.45549.45549,0,0,0-.325-.1325h-.0145a.514.514,0,0,0-.35.15l-7.616,7.621a.374.374,0,0,0-.094.158L6.04,17.6475c-.0425.141.172.319.2935.319a.10284.10284,0,0,0,.023,0c.1035-.024,3.13-1.059,3.672-1.222a.36754.36754,0,0,0,.1555-.0935L17.8,9.0295a.5155.5155,0,0,0,.15-.331A.458.458,0,0,0,17.8225,8.3425Zm-10.803,8.644.989-2.7595,1.77,1.7655C8.968,16.236,7.7195,16.7775,7.0195,16.9865Z" />
		</svg>
	)
}