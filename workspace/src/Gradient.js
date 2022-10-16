import React from 'react'

export function Gradient(props) {
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
			<rect opacity="0.9" height={12} width={1} x={2} y={3} />
			<rect opacity="0.8" height={12} width={1} x={3} y={3} />
			<rect opacity="0.7" height={12} width={1} x={4} y={3} />
			<rect opacity="0.6" height={12} width={1} x={5} y={3} />
			<rect opacity="0.5" height={12} width={1} x={6} y={3} />
			<rect opacity="0.4" height={12} width={1} x={7} y={3} />
			<rect opacity="0.35" height={12} width={1} x={8} y={3} />
			<rect opacity="0.3" height={12} width={1} x={9} y={3} />
			<rect opacity="0.25" height={12} width={1} x={10} y={3} />
			<rect opacity="0.2" height={12} width={1} x={11} y={3} />
			<rect opacity="0.15" height={12} width={1} x={12} y={3} />
			<rect opacity="0.1" height={12} width={1} x={13} y={3} />
			<rect opacity="0.05" height={12} width={1} x={14} y={3} />
			<path d="M1,2.5v13a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V2.5a.5.5,0,0,0-.5-.5H1.5A.5.5,0,0,0,1,2.5ZM16,15H2V3H16Z" />
		</svg>
	)
}
