const SkillGroup = ({ title, skills }) => {

    return (
      <div className="mb-8">
        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-4">
          {title}
        </p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-ternary-light dark:bg-ternary-dark px-4 py-4 rounded-lg shadow-sm font-general-regular text-primary-dark dark:text-primary-light"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };

  export default SkillGroup