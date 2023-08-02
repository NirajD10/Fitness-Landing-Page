import React from 'react';
import Wrapper from '../UI/Wrapper';
import fitnessdetclasses from './FitnessDetails.module.css';
import BlankCard from '../UI/BlankCard';
import {motion} from 'framer-motion';
import {useMediaQuery} from '../../hooks/useMediaQuery';

const mainTitleAnimation = {
	hidden: {opacity: 0, y: -90},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 1,
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const lineanimate = {
	initial: {
		width: 0,
	},
	start: {
		width: '100%',
		transition: {
			delay: 1.1,
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

const featureNumAnimate = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 1.1,
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const FitnessDetails = () => {
	const isSmallDevices = useMediaQuery('(350px < width < 766px)');

	return (
		<Wrapper>
			<div id='about-us' className={fitnessdetclasses['fitnessdetails-info']}>
				<motion.div
					variants={mainTitleAnimation}
					initial='hidden'
					whileInView='show'
					viewport={{once: true, amount: 0.8}}>
					<p className={fitnessdetclasses['fitnessd-title']}>We Raise Your</p>
					<p className={fitnessdetclasses['fitnessd-title__italic']}>Confidence</p>
				</motion.div>
				<motion.hr
					variants={lineanimate}
					initial='initial'
					whileInView='start'
					viewport={{once: true, amount: 0.8}}
					className={fitnessdetclasses.whitehr}
				/>
				<div className={fitnessdetclasses['fitness-featurecard']}>
					<BlankCard>
						<motion.h4
							variants={featureNumAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							150
						</motion.h4>
						<motion.p
							variants={fadeinAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							Expert Trainers
						</motion.p>
					</BlankCard>
					<BlankCard>
						<motion.h4
							variants={featureNumAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							254K
						</motion.h4>
						<motion.p
							variants={fadeinAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							Happy Client
						</motion.p>
					</BlankCard>
					<BlankCard>
						<motion.h4
							variants={featureNumAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							10+ Year
						</motion.h4>
						<motion.p
							variants={fadeinAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							Experience
						</motion.p>
					</BlankCard>
				</div>
				<div className={fitnessdetclasses['fitnessdetails-img__withinfo']}>
					<motion.img
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						transition={{delay: 1.3, ease: [0.2, 0.65, 0.3, 0.9], duration: 2}}
						viewport={{once: true, amount: 0.8}}
						src='https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt='Fitness Details'
					/>
					<div className={fitnessdetclasses['fitness-details']}>
						<motion.p
							variants={fadeinAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							Where we are dedicated to helping you achieve your fitness goals through our
							expertise, motivation, mentorship, and top-notch services. Our experienced
							professionals are committed to providing you with the best fitness experience
							possible, ensuring that you stay motivated, inspired, and supported throughout your
							journey. We understand that staying motivated can be tough, which is why we have
							created a positive and uplifting environment where our dedicated trainers and staff
							will provide you with the necessary encouragement to keep pushing forward.
						</motion.p>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default FitnessDetails;
