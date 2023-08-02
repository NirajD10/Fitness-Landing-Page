import React from 'react';
import Badge from '../Badge/Badge';
import ServicesCard from '../UI/ServicesCard';
import servicesitemclasses from './ServiceItem.module.css';

const ServiceItem = props => {
	return (
		<ServicesCard bgcolor={props.bgcolor} color={props.color}>
			<div>
				<h4 className={servicesitemclasses['services-card__title']}>{props.title}</h4>
				<Badge bcolor={props.color}>{props.badgetext}</Badge>
			</div>
			<img className={servicesitemclasses.image} src={props.image} alt={props.imagealt} />
		</ServicesCard>
	);
};

export default ServiceItem;
