import React from 'react'

export function Menu(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,1H1.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,16.5,1ZM13.803,7.8535,9,12.657,4.197,7.8535A.5.5,0,0,1,4.55,7h8.9a.5.5,0,0,1,.353.8535Z" />
		</svg>
	)
}
