import React from 'react'

export function ColorWheel(props) {
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
							'\n      .fill {\n        fill: #464646;\n        fill-rule: evenodd;\n      }    ',
					}}
				/>
			</defs>
			<rect fill="currentColor" opacity={0} />
			<path opacity="0.2" d="M16,9a6.97651,6.97651,0,0,0-2.057-4.95L9,9Z" />
			<path opacity="0.33" d="M9,9l4.9595,4.9345A6.978,6.978,0,0,0,16,9Z" />
			<path opacity="0.47" d="M9,9v7a6.97752,6.97752,0,0,0,4.937-2.0435Z" />
			<path opacity="0.6" d="M9,16V9L4.05,13.9445A6.98,6.98,0,0,0,9,16Z" />
			<path opacity="0.7" d="M9,9H2a6.97949,6.97949,0,0,0,2.05,4.9445Z" />
			<path opacity="0.8" d="M9,9,4.045,4.061A6.9765,6.9765,0,0,0,2,9Z" />
			<path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1ZM9,16A6.9955,6.9955,0,0,1,4.035,4.072L8.9695,9V2H9A7,7,0,0,1,9,16Z" />
		</svg>
	)
}