import React from 'react'

export function RotateRightOutline(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M12.5,5H1.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V5.5A.5.5,0,0,0,12.5,5ZM12,16H2V6H12Z" />
			<path d="M17.75,7.5h-1V6a4.5,4.5,0,0,0-4.5-4.5h-1a.5.5,0,0,0-.5.5v.5a.5.5,0,0,0,.5.5h1a3,3,0,0,1,3,3V7.5h-1a.25.25,0,0,0-.25.25.245.245,0,0,0,.0735.175L15.842,9.9415a.25.25,0,0,0,.316,0L17.9265,7.925A.245.245,0,0,0,18,7.75.25.25,0,0,0,17.75,7.5Z" />
		</svg>
	)
}
