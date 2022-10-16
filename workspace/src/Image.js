import React from 'react'

export function Image(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16,2.5a.534.534,0,0,0-.5625-.5H.5625A.534.534,0,0,0,0,2.5v11a.534.534,0,0,0,.5625.5H1V3H16Z" />
			<path d="M17.5,4H2.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V4.5A.5.5,0,0,0,17.5,4ZM17,13.6865,14.364,11.05a1,1,0,0,0-1.414,0l-1.536,1.536L7.636,8.8075a1,1,0,0,0-1.414,0L3,12.0295V5H17Z" />
			<circle cx="14.5" cy="7.5" r="1.25" />
		</svg>
	)
}