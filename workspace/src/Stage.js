import React from 'react'

export function Stage(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M4,13.5V9A10.65451,10.65451,0,0,0,8,1H1.5a.5.5,0,0,0-.5.5V14H3.5A.5.5,0,0,0,4,13.5Z" />
			<path d="M12.8185,15V8.021l.4375-.4375A1.80851,1.80851,0,1,0,12.2425,6.527l-4.278,4.4375a.366.366,0,0,0-.0004.5176l.0004.0004L8.4825,12A.366.366,0,0,0,9,12l2.3535-2.5145V15H1v1.5a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V15Z" />
		</svg>
	)
}
