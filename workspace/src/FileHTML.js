import React from 'react'

export function FileHTML(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<polygon points="10 1 10 6 15 6 10 1" />
			<path d="M9.5,7A.5.5,0,0,1,9,6.5V1H3.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V7Zm3.944,8.2h-1.4v-2h-1.6v2h-1.4V9.8h1.4v2h1.6v-2h1.4Zm-5.4765-.545a.1285.1285,0,0,1-.1045.2035H6.491a.128.128,0,0,1-.103-.05L4.6575,12.5,6.388,10.1925a.128.128,0,0,1,.103-.05H7.863a.1285.1285,0,0,1,.1045.2035L6.215,12.5Z" />
		</svg>
	)
}
