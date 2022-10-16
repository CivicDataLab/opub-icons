import React from 'react'

export function FolderSearch(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M8,3H1V1.75A.75.75,0,0,1,1.75,1H5.586a1,1,0,0,1,.707.293Z" />
			<path d="M5.6115,11.367A5.79,5.79,0,0,1,17,9.8895V4.5a.5.5,0,0,0-.5-.5H1V14.5a.5.5,0,0,0,.5.5H6.8965A5.763,5.763,0,0,1,5.6115,11.367Z" />
			<path d="M17.6925,16.1345,15.234,13.676A4.5325,4.5325,0,1,0,13.7095,15.2l2.4585,2.4585a1.022,1.022,0,0,0,1.524,0A1.1,1.1,0,0,0,17.6925,16.1345ZM8.617,11.3675A2.78425,2.78425,0,1,1,11.403,14.15H11.4A2.784,2.784,0,0,1,8.617,11.3675Z" />
		</svg>
	)
}