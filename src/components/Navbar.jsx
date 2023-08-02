import React, {useState, useEffect} from 'react';
import {useAnimate, stagger} from 'framer-motion';
import {IconContext} from 'react-icons';
import {IoFitness} from 'react-icons/io5';
import {HiMenuAlt4} from 'react-icons/hi';
import navbarclasses from './Navbar.module.css';

const useMenuAnimation = isMenuOpen => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const menuAnimations = isMenuOpen
			? [
					['nav', {transform: 'translateX(0%)'}, {ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6}],
					[
						'li',
						{transform: 'scale(1)', opacity: 1, filter: 'blur(0px)'},
						{delay: stagger(0.05), at: '-0.1'},
					],
			  ]
			: [
					[
						'li',
						{transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)'},
						{delay: stagger(0.05, {from: 'last'}), at: '-0.1'},
					],
					['nav', {transform: 'translateX(-100%)'}, {at: '-0.1'}],
			  ];

		animate(menuAnimations);
	}, [isMenuOpen]);

	return scope;
};

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scope = useMenuAnimation(isMenuOpen);

	const linkanchor = e => {
		e.preventDefault();
		const anchor = e.target.getAttribute('href').substr(1);
		window.scrollTo(0, document.getElementById(anchor).offsetTop);
	};

	return (
		<>
			<IconContext.Provider value={{size: '3em', className: `${navbarclasses['logo-icon']}`}}>
				<article>
					<header>
						<div className={navbarclasses.logo}>
							<IoFitness />
							<p className={navbarclasses.logo__title}>Fitness</p>
						</div>
						<div style={{cursor: 'pointer'}} onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<HiMenuAlt4 />
						</div>
						<a href='#contact' onClick={linkanchor} className={navbarclasses['btn-join']}>
							Join Now
						</a>
					</header>
				</article>
			</IconContext.Provider>
			<div ref={scope} exit={{height: '0%'}}>
				<nav className={`${navbarclasses['menu-wrapper']} ${navbarclasses.active}`}>
					<ul className={navbarclasses['menu-list__container']}>
						<li>
							<a
								className={navbarclasses['menu-list__listitem']}
								href='#about-us'
								onClick={linkanchor}>
								About us
							</a>
							<a
								className={navbarclasses['menu-list__listitem']}
								href='#services'
								onClick={linkanchor}>
								Services
							</a>
							<a
								className={navbarclasses['menu-list__listitem']}
								href='#package'
								onClick={linkanchor}>
								Package
							</a>
							<a
								className={navbarclasses['menu-list__listitem']}
								href='#contact'
								onClick={linkanchor}>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
