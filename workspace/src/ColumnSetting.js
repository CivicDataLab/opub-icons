import React from 'react'

export function ColumnSetting(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M5,17H1.5a.5.5,0,0,1-.5-.5V1.5A.5.5,0,0,1,1.5,1H5Z" />
			<path d="M8.71,15.4685a1.8065,1.8065,0,0,1-1.11-1.665v-.607a1.806,1.806,0,0,1,1.11-1.665,1.807,1.807,0,0,1,.3875-1.974l.459-.4595a1.792,1.792,0,0,1,1.276-.5285c.057,0,.1115.0115.167.0165V1H7V17H8.773A1.81349,1.81349,0,0,1,8.71,15.4685Z" />
			<path d="M13.1965,7.6h.607A1.8065,1.8065,0,0,1,15.468,8.7095,1.77249,1.77249,0,0,1,17,8.7815V1.5a.5.5,0,0,0-.5-.5H13V7.63A1.70987,1.70987,0,0,1,13.1965,7.6Z" />
			<path d="M17.5965,12.893H16.534a3.0709,3.0709,0,0,0-.45-1.0895l.7565-.7565a.3035.3035,0,0,0,0-.429l-.46-.46a.3035.3035,0,0,0-.429,0l-.7555.757a3.07263,3.07263,0,0,0-1.089-.45V9.4035A.3035.3035,0,0,0,13.8035,9.1h-.607a.3035.3035,0,0,0-.3035.3035V10.466a3.07263,3.07263,0,0,0-1.089.45l-.7565-.7565a.3035.3035,0,0,0-.429,0l-.46.46a.3035.3035,0,0,0,0,.429l.7565.7565a3.0709,3.0709,0,0,0-.45,1.0895H9.4035A.3035.3035,0,0,0,9.1,13.198v.607a.3035.3035,0,0,0,.3035.3035H10.466a3.0709,3.0709,0,0,0,.45,1.0895l-.7565.7565a.3035.3035,0,0,0,0,.429l.46.46a.3035.3035,0,0,0,.429,0l.7565-.7565a3.07263,3.07263,0,0,0,1.089.45v1.0625a.3035.3035,0,0,0,.3035.3035h.607a.3035.3035,0,0,0,.3035-.3035V16.534a3.07263,3.07263,0,0,0,1.089-.45l.7565.7565a.3035.3035,0,0,0,.429,0l.46-.46a.3035.3035,0,0,0,0-.429l-.7575-.7555a3.0709,3.0709,0,0,0,.45-1.0895h1.0625a.3035.3035,0,0,0,.3035-.3035v-.6065a.3035.3035,0,0,0-.3035-.3035ZM13.5,15.25a1.75,1.75,0,1,1,1.75-1.75A1.75,1.75,0,0,1,13.5,15.25Z" />
		</svg>
	)
}
