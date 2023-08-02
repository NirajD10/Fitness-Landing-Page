import React from 'react';
import contactdetailclasses from './ContactDetails.module.css';

const ContactDetails = () => {
	return (
		<div className={contactdetailclasses['contact-details__wrapper']}>
			<ul className={contactdetailclasses['contact-details__lists']}>
				<li>
					<h4>Find Us</h4>
					<a>
						<p>
							1925 Century Park East
							<br /> Suite 1250
							<br /> Los Angeles, CA 90067
						</p>
					</a>
				</li>
				<li>
					<h4>General Contact</h4>
					<a>
						<p>
							T – 1 310 556 0155 <br />
							info@actionistconsulting.com
						</p>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default ContactDetails;
