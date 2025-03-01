import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className='xs:w-[250px] w-full'>
			<motion.div
				variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
					<img src={icon} alt={title} className='object-contain w-16 h-16' />
					<h3 className='text-white text-[20px] font-bold text-center'>
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
					I&apos;m a Entusiastic Software Engineer with over 2 years of working
					experience in the e-commerce industry. I focus on transforming web
					experiences into meaningful user journeys. Constantly exploring new
					ways to enhance user interaction and digital accessibility with modern
					technologies.
				</motion.p>
				<div className='flex flex-wrap justify-center gap-10 mt-20'>
					{services.map((service, index) => (
						<ServiceCard key={service.title} index={index} {...service} />
					))}
				</div>
			</motion.div>
		</>
	);
};

export default SectionWrapper(About, 'about');
