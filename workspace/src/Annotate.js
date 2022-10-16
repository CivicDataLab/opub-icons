import React from 'react'

export function Annotate(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M12,16V12.5a.5.5,0,0,1,.5-.5H16a.58048.58048,0,0,1-.127.427l-3.446,3.446A.58048.58048,0,0,1,12,16Z" />
			<path d="M15.5,2H2.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5H11V12a1,1,0,0,1,1-1h4V2.5A.5.5,0,0,0,15.5,2ZM9,12H5V11H9Zm4-3H5V8h8Zm0-3H5V5h8Z" />
		</svg>
	)
}
