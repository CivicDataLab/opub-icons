import React from 'react'

export function FilmrollAutoAdd(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16,13V11.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V13H12.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H14v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V15h1.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5Z" />
			<rect height={11} rx="0.5" width={7} y={4} />
			<path d="M10,12a2.5075,2.5075,0,0,1,2.5-2.5H13a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H8v9H9a1,1,0,0,0,1-1Z" />
			<path d="M5,3V2a.5.5,0,0,0-.5-.5h-2A.5.5,0,0,0,2,2V3Z" />
		</svg>
	)
}
