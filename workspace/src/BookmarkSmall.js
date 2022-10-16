import React from 'react'

export function BookmarkSmall(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<defs>
				<style
					dangerouslySetInnerHTML={{
						__html:
							'\n      .fill {\n        fill: #464646;\n        fill-rule: evenodd;\n      }\n    ',
					}}
				/>
			</defs>
			<rect fill="currentColor" opacity={0} />
			<path d="M8.511,11.924l3.061,2.994A.2521.2521,0,0,0,12,14.744V3.5a.5.5,0,0,0-.5-.5h-6a.5.5,0,0,0-.5.5V14.753a.2615.2615,0,0,0,.153.228.2405.2405,0,0,0,.271-.05Z" />
			<path d="M8.511,11.924l3.061,2.994A.2521.2521,0,0,0,12,14.744V3.5a.5.5,0,0,0-.5-.5h-6a.5.5,0,0,0-.5.5V14.753a.2615.2615,0,0,0,.153.228.2405.2405,0,0,0,.271-.05Z" />
		</svg>
	)
}
