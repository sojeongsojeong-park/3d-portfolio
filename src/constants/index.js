import {
	adaptability,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	growth,
	curiosity,
	collab,
	purpleIo,
	bookit,
	jamongda,
	travelog,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'adaptability',
		icon: adaptability,
	},
	{
		title: 'Fast-Learner',
		icon: growth,
	},
	{
		title: 'Curiosity & Challenging',
		icon: curiosity,
	},
	{
		title: 'Collaboration & Communication',
		icon: collab,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

const experiences = [
	{
		title: 'Frontend Developer',
		company_name: 'Purple IO',
		icon: purpleIo,
		iconBg: '#383E56',
		date: 'Nov 2022 - Feb 2025',
		points: [
			'Enhanced user experience for one of Korea’s top 10 fashion e-commerce platforms through seamless UI, personalization, and CMS integration.',
			'Led the frontend migration of a talent marketplace from PHP to React, delivering a redesigned UI, real-time chat, and enhanced e-commerce core features.',
			'Developed the SDK and frontend for a no-code SaaS CRM, enabling personalized marketing through targeted popups and user triggers.',
			'Enhanced stability by wrting unit & e2e tests using Jest, Vitest, Playwright.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'Bookit',
		description: 'Mobile application for recording books',
		tags: [
			{
				name: 'Flutter',
				color: 'blue-text-gradient',
			},
			{
				name: 'hive',
				color: 'green-text-gradient',
			},
		],
		image: bookit,
		source_code_link:
			'https://apps.apple.com/us/app/%EC%B1%85%EC%9E%87%EA%B8%B0-bookit/id6737536843',
	},
	{
		name: 'Jamongda',
		description: `Web application for memorize vocabulary and testing words \n only supported on mobile devices`,
		tags: [
			{
				name: 'nextjs 14',
				color: 'blue-text-gradient',
			},
			{
				name: 'supabase',
				color: 'green-text-gradient',
			},
			{
				name: 'PandaCSS',
				color: 'pink-text-gradient',
			},
		],
		image: jamongda,
		url: 'https://jamongda.netlify.app/',
	},
	{
		name: 'travelog',
		description:
			"Web application for recording your travels by itinerary, gathering the places you've visited on a heatmap",
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'recoil',
				color: 'green-text-gradient',
			},
			{
				name: 'styled-components',
				color: 'pink-text-gradient',
			},
		],
		image: travelog,
		url: 'https://youtu.be/Zqd3_FhrXq4',
	},
];

export { services, technologies, experiences, testimonials, projects };
