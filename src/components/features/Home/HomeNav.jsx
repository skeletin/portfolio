const Tab = ({ title, type, setProjectType, projectType }) => {
  return (
    <button
      onClick={() => setProjectType(type)}
      className={`flex justify-center items-center h-6  w-[7rem] rounded-full ${
        projectType === type
          ? "bg-gray-300/10 border border-gray-900 shadow-4xl shadow-gray-900 "
          : ""
      } `}
    >
      <span className="michroma text-sm">{title}</span>
    </button>
  );
};

const HomeNav = ({ setProjectType, projectType }) => {
  console.log(projectType);
  const tabs = [
    { title: "Personal", type: "personal" },
    { title: "Works", type: "works" },
  ];

  return (
    <div className="flex justify-center text-white mb-8">
      <div className="flex justify-center items-center w-[20rem] space-x-10">
        {tabs.map(({ title, type }) => {
          return (
            <Tab
              setProjectType={setProjectType}
              projectType={projectType}
              key={title}
              title={title}
              type={type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeNav;
