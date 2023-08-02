import React from 'react';
import {FcLike} from 'react-icons/fc';
import footerclass from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={footerclass['footer__wrapper']}>
			<p>
				© 2023 - <FcLike />
				&nbsp; Website developed by Niraj Deshmukh
			</p>
		</footer>
	);
};

export default Footer;
