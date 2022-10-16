import React from 'react'

export function Perspective(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M1,1.6405v15.638a.5.5,0,0,0,.6755.468l15-5.625A.5.5,0,0,0,17,11.6535V5.3905a.5.5,0,0,0-.3785-.485l-15-3.75A.5.5,0,0,0,1,1.6405Zm15,6.418-3,.2v-3.25l3,.723ZM8,8.595V3.8065l4,.9645V8.327Zm4,.678v3.563L8,14.305V9.5955ZM7,3.5655V8.662L2,9V2.36ZM2,10.08l5-.4035v4.996l-5,1.836Zm11,2.389V9.192l3-.242v2.417Z" />
		</svg>
	)
}
