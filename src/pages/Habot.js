import React from 'react';
import Search from '../molecules/Search';
import HowItWorks from '../molecules/HowItWorks';
import Footer from '../molecules/Footer';
import styles from './Habot.module.css';
import Header from '../molecules/Header';
import ReadyToDive from '../molecules/ReadyToDive';
import SupplierFindYou from '../molecules/SupplierFindYou';

const Habot = () => {
	return (
		<div className={styles.mainContainer}>
			<Header />
			<Search />
			<ReadyToDive />
			<SupplierFindYou />
			<HowItWorks />
			<Footer />
		</div>
	);
};

export default Habot;
