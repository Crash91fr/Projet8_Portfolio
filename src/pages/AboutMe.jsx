import AboutMeBio from '../components/about/AboutMeBio';
import { AboutMeProvider } from '../context/AboutMeContext';
import MySkills from '../components/about/MySkills'
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>
			<motion.div		
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 1.4,
					delay: 0.3,
					}}	
				className="container mx-auto"
			>
				<MySkills />	
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
