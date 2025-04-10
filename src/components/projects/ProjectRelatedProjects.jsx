import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectRelatedProjects = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
  
	return (
	  <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
		<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
		  {singleProjectData.RelatedProject.title}
		</p>
  
		<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
		  {singleProjectData.RelatedProject.Projects.map((project) => {
			// Dynamically build the URL using the project ID
			const projectUrl = `/projects/${project.id}`;
  
			return (
			  <a
				href={projectUrl} // Use the dynamically built URL
				target="_blank" // Opens the link in a new tab
				rel="noopener noreferrer" // Security best practice
				key={project.id} // Key for each project
			  >
				<img
				  src={project.img} // The project image
				  className="rounded-xl cursor-pointer"
				  alt={project.title} // Alt text for accessibility
				/>
			  </a>
			);
		  })}
		</div>
	  </div>
	);
  };
  
  export default ProjectRelatedProjects;
