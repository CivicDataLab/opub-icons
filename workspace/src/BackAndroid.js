import React from 'react'

export function BackAndroid(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.75,8.04h-14L8.72,3.07a.48349.48349,0,0,0,.01642-.68357L8.72,2.37l-.35-.36a.5135.5135,0,0,0-.71,0L1.24,8.44a.5135.5135,0,0,0,0,.71l6.39,6.84a.5135.5135,0,0,0,.71,0l.35-.35a.5135.5135,0,0,0,0-.71L3.76,9.5H17.75A.25.25,0,0,0,18,9.25V8.29A.25.25,0,0,0,17.75,8.04Z" />
		</svg>
	)
}
