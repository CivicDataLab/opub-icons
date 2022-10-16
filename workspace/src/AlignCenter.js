import React from 'react'

export function AlignCenter(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14.5,10H9V8h3.5a.5.5,0,0,0,.5-.5v-4a.5.5,0,0,0-.5-.5H9V.25A.25.25,0,0,0,8.75,0h-.5A.25.25,0,0,0,8,.25V3H4.5a.5.5,0,0,0-.5.5v4a.5.5,0,0,0,.5.5H8v2H2.5a.5.5,0,0,0-.5.5v4a.5.5,0,0,0,.5.5H8v2.75a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,9,17.75V15h5.5a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,14.5,10Z" />
		</svg>
	)
}
