import React from 'react'

export function LinearGradient(props) {
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
			<rect opacity="0.9" height={1} width={14} x={2} y={15} />
			<rect opacity="0.8" height={1} width={14} x={2} y={14} />
			<rect opacity="0.7" height={1} width={14} x={2} y={13} />
			<rect opacity="0.6" height={1} width={14} x={2} y={12} />
			<rect opacity="0.5" height={1} width={14} x={2} y={11} />
			<rect opacity="0.4" height={1} width={14} x={2} y={10} />
			<rect opacity="0.35" height={1} width={14} x={2} y={9} />
			<rect opacity="0.3" height={1} width={14} x={2} y={8} />
			<rect opacity="0.25" height={1} width={14} x={2} y={7} />
			<rect opacity="0.2" height={1} width={14} x={2} y={6} />
			<rect opacity="0.15" height={1} width={14} x={2} y={5} />
			<rect opacity="0.1" height={1} width={14} x={2} y={4} />
			<rect opacity="0.05" height={1} width={14} x={2} y={3} />
			<path d="M1.5,17h15a.5.5,0,0,0,.5-.5V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v15A.5.5,0,0,0,1.5,17ZM16,2V16H2V2Z" />
		</svg>
	)
}
