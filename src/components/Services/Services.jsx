import React from 'react';
import Wrapper from '../UI/Wrapper';
import serviceclasses from './Services.module.css';
import ServiceItem from '../Sub-Components/ServiceItem';
import {services as servicedata} from '../Sub-Components/service_data';
import {motion} from 'framer-motion';

const mainTitleAnimation = {
	hidden: {opacity: 0, y: -90},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const Services = () => {
	return (
		<>
			<Wrapper>
				<div id='services' className={serviceclasses.services}>
					<motion.div
						variants={mainTitleAnimation}
						initial='hidden'
						whileInView='show'
						viewport={{once: true, amount: 0.8}}>
						<p className={serviceclasses['services-title']}>We Provide You</p>
						<p className={serviceclasses['services-title__italic']}>Best Services</p>
					</motion.div>
					<div className={serviceclasses['services-card']}>
						{servicedata.map(item => (
							<ServiceItem
								key={item.id}
								bgcolor={item.backgroundcolor}
								color={item.textcolor}
								title={item.title}
								badgetext={item.badgetext}
								imagealt={item.imagealt}
								image={item.imagelink}
							/>
						))}
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default Services;
