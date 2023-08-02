import React from 'react';
import badge from './Badge.module.css';

const Badge = props => {
	return (
		<div>
			<div
				style={{
					borderColor: `${props.bcolor ? props.bcolor : null}`,
					backgroundColor: `${props.bgcolor ? props.bgcolor : null}`,
				}}
				className={badge.sbadge}>
				{props.children}
			</div>
		</div>
	);
};

export default Badge;
