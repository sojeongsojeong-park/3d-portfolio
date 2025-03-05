import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';

const ProjectCard = ({ index, name, description, tags, image, url }) => (
	<motion.a
		variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
		href={url}
		target='_blank'>
		<Tilt
			options={{ max: 45, scale: 1, speed: 450 }}
			className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
			<div className='relative w-full h-[230px]'>
				<img
					src={image}
					alt={name}
					className='object-contain w-full h-full rounded-2xl'
				/>
			</div>

			<div className='mt-5'>
				<h3 className='text-white font-bold text-[24px]'>{name}</h3>
				<p className='mt-2 text-secondary text-[14px] whitespace-pre-wrap'>
					{description}
				</p>
			</div>

			<div className='flex flex-wrap gap-2 mt-4'>
				{tags.map((tag) => (
					<p key={tag.name} className={`text-[14px] ${tag.color}`}>
						#{tag.name}
					</p>
				))}
			</div>
		</Tilt>
	</motion.a>
);

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className='flex w-full'>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
					Following projects showcases my skills and experience through
					real-world exampls of my side project. It reflects my ability to solve
					complex problems, work with different technologies, and manage
					projects effectively. You can see the projects by clicking on each
					card.
				</motion.p>
			</div>
			<div className='flex flex-wrap mt-20 gap-7'>
				{projects.map((project, idx) => (
					<ProjectCard key={`project-${idx}`} index={idx} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, 'works');
