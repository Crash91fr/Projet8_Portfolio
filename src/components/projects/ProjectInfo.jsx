import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

import { FiGithub, FiGlobe } from 'react-icons/fi';

const iconMap = {
  github: <FiGithub />,
  globe: <FiGlobe />
};


const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  const projectInfo = singleProjectData.ProjectInfo;

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {projectInfo.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {projectInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {projectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {projectInfo.Technologies[0].techs.join(', ')}
          </p>
        </div>

        {/* Single project gitHub sharing */}
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {projectInfo.SocialSharingHeading}
          </p>
          <div className="flex items-center gap-3 mt-5">
            {projectInfo.SocialSharing.map((social) => {
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Link to Project on GitHub"
                  className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
				        >
                  <div className="text-lg lg:text-2xl">
				          {iconMap[social.icon]}
                  </div>
				      </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {projectInfo.ProjectDetailsHeading}
        </p>
        {projectInfo.ProjectDetails.map((details) => {
          return (
            <p
              key={details.id}
              className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {details.details}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInfo;