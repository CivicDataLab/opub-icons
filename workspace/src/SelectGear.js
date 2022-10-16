import React from 'react'

export function SelectGear(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3,4.3655V3H8V6.0535l2,1.991V2A1,1,0,0,0,9,1H2A1,1,0,0,0,1,2V9a1,1,0,0,0,1,1H3Z" />
			<path d="M17.5965,12.893H16.534a3.0709,3.0709,0,0,0-.45-1.0895l.7565-.7565a.3035.3035,0,0,0,0-.429l-.46-.46a.3035.3035,0,0,0-.429,0l-.7555.757a3.07263,3.07263,0,0,0-1.089-.45V9.4035A.3035.3035,0,0,0,13.8035,9.1h-.607a.3035.3035,0,0,0-.3035.3035V10.466a3.07263,3.07263,0,0,0-1.089.45l-.7565-.7565a.3035.3035,0,0,0-.429,0l-.46.46a.3035.3035,0,0,0,0,.429l.7565.7565a3.0709,3.0709,0,0,0-.45,1.0895H9.4035A.3035.3035,0,0,0,9.1,13.198v.607a.3035.3035,0,0,0,.3035.3035H10.466a3.0709,3.0709,0,0,0,.45,1.0895l-.7565.7565a.3035.3035,0,0,0,0,.429l.46.46a.3035.3035,0,0,0,.429,0l.7565-.7565a3.07263,3.07263,0,0,0,1.089.45v1.0625a.3035.3035,0,0,0,.3035.3035h.607a.3035.3035,0,0,0,.3035-.3035V16.534a3.07263,3.07263,0,0,0,1.089-.45l.7565.7565a.3035.3035,0,0,0,.429,0l.46-.46a.3035.3035,0,0,0,0-.429l-.7575-.7555a3.0709,3.0709,0,0,0,.45-1.0895h1.0625a.3035.3035,0,0,0,.3035-.3035v-.6065a.3035.3035,0,0,0-.3035-.3035ZM13.5,15.082A1.582,1.582,0,1,1,15.082,13.5h0A1.582,1.582,0,0,1,13.5,15.082Z" />
			<path d="M9.275,9.05,4.25,4.043A.14251.14251,0,0,0,4.147,4,.146.146,0,0,0,4,4.145v9.5705a.146.146,0,0,0,.1455.1465H4.147a.14253.14253,0,0,0,.1-.043l2.185-2.8285H7.9015A6.15892,6.15892,0,0,1,9.275,9.05Z" />
		</svg>
	)
}