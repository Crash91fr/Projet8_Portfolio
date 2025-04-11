import SkillGroup from "./SkillGroup";

const MySkills = () => {
    const skillsData = {
      FrontEnd: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      BackEnd: ["Node", "Express","Rest API", "MongoDB"],
      Tools: ["Git", "Github", "VS-Code", "Chrome Dev Tool", "Figma"],
    };
  
    return (
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-general-medium text-2xl sm:text-4xl mt-6 mb-8 text-ternary-dark dark:text-ternary-lightxt-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light">
            My Skills
          </p>
          <div className="space-y-8">
            {Object.entries(skillsData).map(([title, skills]) => (
              <SkillGroup key={title} title={title} skills={skills} />
            ))}
          </div>
        </div>
    );
  };
 
export default MySkills;