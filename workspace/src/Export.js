import React from 'react'

export function Export(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M12.5,13h-1a.5.5,0,0,0-.5.5V15H3V3h8V4.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-3A.5.5,0,0,0,12.5,13Z" />
			<path d="M17.9255,8.8275,14.666,5.1a.39352.39352,0,0,0-.2635-.1.4.4,0,0,0-.4.4V8H8.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H14v2.6a.4.4,0,0,0,.4.4.39352.39352,0,0,0,.2635-.1l3.262-3.7225A.25.25,0,0,0,17.9255,8.8275Z" />
		</svg>
	)
}