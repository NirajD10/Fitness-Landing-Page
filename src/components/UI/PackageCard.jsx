import React from 'react';
import packagecardclasses from './PackageCard.module.css';

const PackageCard = React.forwardRef((props, ref) => {
	return (
		<div
			ref={ref}
			className={
				packagecardclasses[
					`${props.bgcolor === 'light' ? 'package-card__light' : 'package-card__dark'}`
				]
			}>
			{props.children}
		</div>
	);
});

export default PackageCard;
