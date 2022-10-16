import React from 'react'

export function Help(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm.0235,13.438a1.345,1.345,0,0,1-.11595-2.6875q.05795-.00251.11595,0a1.31,1.31,0,0,1,1.39719,1.21658q.00408.05912.00281.11842a1.29052,1.29052,0,0,1-1.4,1.3525Zm1.783-6.409-.1.105c-.3945.4145-.842.884-.842,1.1755a1.38555,1.38555,0,0,0,.1795.674l.0725.1385-.0565.2145a.30851.30851,0,0,1-.2835.189H8.4355a.43352.43352,0,0,1-.325-.1175A2.05554,2.05554,0,0,1,7.688,9.1455a3.0589,3.0589,0,0,1,1.1125-2.075c.1-.1095.195-.21.2875-.3045.3145-.3255.5065-.5355.5065-.7575,0-.154,0-.6225-.893-.6225a2.959,2.959,0,0,0-1.5795.4595.296.296,0,0,1-.3265-.01L6.677,5.751l-.0275-.2215v-1.45A.4395.4395,0,0,1,6.846,3.67a4.13751,4.13751,0,0,1,2.15-.55,2.55036,2.55036,0,0,1,2.75,2.636A3.0655,3.0655,0,0,1,10.8065,8.029Z" />
		</svg>
	)
}
