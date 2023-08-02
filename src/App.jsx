import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Feature from './components/Feature/Feature';
import FitnessDetails from './components/FitnessDetails/FitnessDetails';
import Services from './components/Services/Services';
import Package from './components/Package/Package';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import {ScrollerMotion} from 'scroller-motion';

const App = () => {
	return (
		<ScrollerMotion>
			<Navbar />
			<Hero />
			<Feature />
			<FitnessDetails />
			<Services />
			<Package />
			<Contact />
			<Footer />
		</ScrollerMotion>
	);
};

export default App;
