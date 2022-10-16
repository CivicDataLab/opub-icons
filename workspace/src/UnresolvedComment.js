import React from 'react'

export function UnresolvedComment(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			id="Icons"
			xmlns="http://www.w3.org/2000/svg"
			width={props.width || 18}
			viewBox="0 0 18 18"
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
			<path d="M15,2a1.00115,1.00115,0,0,1,1,1v8a1.00115,1.00115,0,0,1-1,1H8.58575l-.2929.29291L5,15.58612V12H3a1.00115,1.00115,0,0,1-1-1V3A1.00115,1.00115,0,0,1,3,2Zm0-1H3A2,2,0,0,0,1,3v8a2,2,0,0,0,2,2H4v4.39648a.25.25,0,0,0,.24957.25043H4.25a.25005.25005,0,0,0,.177-.07342L9,13h6a2,2,0,0,0,2-2V3A2,2,0,0,0,15,1Z" />
			<rect x={5} y={6} width={8} height={2} rx="0.5" />
		</svg>
	)
}
