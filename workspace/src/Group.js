import React from 'react'

export function Group(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M11,7V5.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5H7V7Z" />
			<path d="M12.5,8H8v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,12.5,8Z" />
			<path d="M16.5,4a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5V2H4V1.5A.5.5,0,0,0,3.5,1h-2a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5H2V14H1.5a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V16H14v.5a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5H16V4ZM15,14h-.5a.5.5,0,0,0-.5.5V15H4v-.5a.5.5,0,0,0-.5-.5H3V4h.5A.5.5,0,0,0,4,3.5V3H14v.5a.5.5,0,0,0,.5.5H15Z" />
		</svg>
	)
}
