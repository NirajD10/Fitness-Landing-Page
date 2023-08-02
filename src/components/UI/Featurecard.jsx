import React from 'react';
import featurecardclasses from './Featurecard.module.css';

const FeatureCard = React.forwardRef((props, ref) => {
	return (
		<div
			ref={ref}
			style={{
				backgroundColor: props.bgcolor === 'black' ? '#181818' : null,
				color: props.bgcolor === 'black' ? 'white' : '#black',
				zIndex: props.bgcolor === 'black' ? 200 : 100,
			}}
			className={featurecardclasses.fcard}>
			{props.children}
		</div>
	);
});

export default FeatureCard;
