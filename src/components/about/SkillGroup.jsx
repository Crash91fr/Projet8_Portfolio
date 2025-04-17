const SkillGroup = ({ title, skills }) => {
  
  const chunkedSkills = [];
  for (let i = 0; i < skills.length; i += 3) {
    chunkedSkills.push(skills.slice(i, i + 3));
  }

  return (
    <div className="mb-10">
      <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mt-6 mb-6">
        {title}
      </p>
      <div className="font-general-regular w-full sm:w-3/4">
        {chunkedSkills.map((chunk, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 mb-4">
            {chunk.map((skill, index) => (
              <span
                key={index}
                className="bg-ternary-light dark:bg-ternary-dark px-4 py-2 rounded-lg shadow-sm text-primary-dark dark:text-primary-light"
              >
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;