import React from 'react'

export function Hand0(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14.1195,9.728c-.276-.156-.5695-1.424-1.689-1.424a.6535.6535,0,0,1-.3-.036c-.0695-.0445-.25-1.2965-1.4745-1.2965a3.775,3.775,0,0,1-.832-.06A1.65,1.65,0,0,0,8.416,5.982c-.116,0-.694.1305-.7115.1305-.63,0-.832-.625-1.8135-.394-1.111.2615-1.1535,1.6-1.1535,2.311,0,.3355-1.057,1.483-1.057,1.483a2.8065,2.8065,0,0,0-.2765,2.59c.521,1.3195,1.733,5.231,5.84,5.231,2.3665,0,4.1225-.905,4.747-2.3735.424-1.229.7785-2.576.9105-3.17A1.856,1.856,0,0,0,14.1195,9.728Z" />
		</svg>
	)
}