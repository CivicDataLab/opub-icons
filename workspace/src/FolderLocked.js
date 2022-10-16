import React from 'react'

export function FolderLocked(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M8,12.506a1.5035,1.5035,0,0,1,1.0705-1.4375A4.477,4.477,0,0,1,13.5235,7c.079,0,.159,0,.2385.006A4.377,4.377,0,0,1,17,8.743V4.5a.5.5,0,0,0-.5-.5H1V14.5a.5.5,0,0,0,.5.5H8Z" />
			<path d="M8,3H1V1.75A.75.75,0,0,1,1.75,1H5.586a1,1,0,0,1,.707.293Z" />
			<path d="M17.5,12h-.4775v-.504a3.5,3.5,0,0,0-7,0V12H9.5a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h8a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,17.5,12Zm-3.283,3.711v.964a.347.347,0,0,1-.347.347h-.694a.347.347,0,0,1-.347-.347v-.964a1.04093,1.04093,0,1,1,1.388,0ZM15.7725,12h-4.5v-.504a2.25,2.25,0,0,1,4.5,0Z" />
		</svg>
	)
}
