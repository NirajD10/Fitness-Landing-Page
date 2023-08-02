import React from 'react';
import Wrapper from '../UI/Wrapper';
import contactclasses from './Contact.module.css';
import FormContact from '../Sub-Components/FormContact';
import ContactDetails from '../Sub-Components/ContactDetails';
import {motion} from 'framer-motion';

const mainTitleAnimation = {
	hidden: {opacity: 0, y: -90},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 1,
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const fadeinAnimate = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 1.2,
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const Contact = () => {
	return (
		<Wrapper>
			<div id='contact' className={contactclasses['contact-us']}>
				<motion.p
					variants={mainTitleAnimation}
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.8}}
					className={contactclasses['contactus-title']}>
					Contact us
				</motion.p>
				<motion.div
					variants={fadeinAnimate}
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.8}}
					className={contactclasses['contactus-us__div']}>
					<FormContact />
					<ContactDetails />
				</motion.div>
			</div>
		</Wrapper>
	);
};

export default Contact;
