import SkillGroup from "./SkillGroup";

const MySkills = () => {
    const skillsData = {
      FrontEnd: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      BackEnd: ["Node", "Express","Rest API", "MongoDB"],
      Tools: ["Git", "Github", "VSCode", "Chrome DevTools", "Figma"],
    };
  
    return (
      <div>
        <div className="w-full max-w-4xl mx-auto px-4">
          <p className="font-general-medium text-2xl sm:text-4xl mt-10 mb-8 text-ternary-dark dark:text-ternary-light font-bold text-primary-dark dark:text-primary-light">
            My Skills
          </p>
          <div>
            {Object.entries(skillsData).map(([title, skills]) => (
              <SkillGroup key={title} title={title} skills={skills} />
            ))}
          </div>
        </div>
      </div> 
    );
  };
 
export default MySkills;