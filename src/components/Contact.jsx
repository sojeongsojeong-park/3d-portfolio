import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		window.location = `mailto:www.sojeong.park@gmail.com?cc=${form.email}&subject=Hello I'm ${form.name}&body=${form.message}`;
		setForm({ name: '', email: '', message: '' });
		formRef.current.reset();
	};

	return (
		<div className='flex gap-10 overflow-hidden xl:mt-12 xl:flex-row flew-col-reverse'>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact .</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='flex flex-col gap-8 mt-12'>
					<label className='flex flex-col'>
						<span className='mb-4 font-medium text-white'> Your Name</span>
						<input
							type='text'
							name='name'
							value={form.name}
							onChange={handleChange}
							placeholder="what's your name?"
							className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='mb-4 font-medium text-white'> Your Email</span>
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							placeholder="what's your email?"
							className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='mb-4 font-medium text-white'> Your Message</span>
						<textarea
							rows='7'
							name='message'
							value={form.message}
							onChange={handleChange}
							placeholder='what do you want to say?'
							className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
						/>
					</label>

					<button
						type='submit'
						className='px-8 py-3 font-bold text-white shadow-md outline-none bg-tertiary w-fit shadow-primary rounded-xl'>
						send email
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');
