import { BrowserRouter } from 'react-router-dom';
import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	StarsCanvas,
	Tech,
	Works,
} from './components';

const App = () => {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
					<Navbar />
					<Hero />
					<div>
						<About />
						<Experience />
						<Tech />
						<Works />
						<div className='relative z-0'>
							<Contact />
							<StarsCanvas />
						</div>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
