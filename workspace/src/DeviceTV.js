import React from 'react'

export function DeviceTV(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.5,4H9.707L12.8305.8765a.4855.4855,0,0,0,.01917-.68633L12.8305.171a.5.5,0,0,0-.70711-.00089L12.1225.171,9,3.293,5.888.181A.495.495,0,0,0,5.18809.168L5.178.178a.4855.4855,0,0,0-.02092.68628L5.181.888,8.293,4H.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5h17a.5.5,0,0,0,.5-.5V4.5A.5.5,0,0,0,17.5,4ZM15,15H2V6H15Zm2-.5a.5.5,0,0,1-1,0v-1a.5.5,0,0,1,1,0Z" />
		</svg>
	)
}
