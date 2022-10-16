import React from 'react'

export function RSS(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			id="S_RSS_18_N"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<defs>
				<style
					dangerouslySetInnerHTML={{
						__html:
							'\n      .fill {\n        fill: #464646;\n      }      \n    ',
					}}
				/>
			</defs>
			<rect fill="currentColor" opacity={0} />
			<circle cx="3.997" cy="14.003" r={2} />
			<path d="M10.992,16h-2a.25.25,0,0,1-.248-.244,6.759,6.759,0,0,0-6.5-6.5A.25.25,0,0,1,2,9.01v-2a.252.252,0,0,1,.256-.251,9.262,9.262,0,0,1,8.987,8.991A.25.25,0,0,1,10.992,16Z" />
			<path d="M15.992,16h-2a.249.249,0,0,1-.249-.246A11.848,11.848,0,0,0,2.243,4.162.249.249,0,0,1,2,3.914V2.008a.253.253,0,0,1,.254-.253A14.269,14.269,0,0,1,16.245,15.749.253.253,0,0,1,15.992,16Z" />
		</svg>
	)
}
