import { Link, useLocation } from "react-router";

const Item = ({ title, route }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`flex justify-center items-center h-6  w-[7rem] rounded-full ${
        route === pathname
          ? "bg-gray-300/10 border border-gray-900 shadow-4xl shadow-gray-900 "
          : ""
      } `}
      to={route}
    >
      <span className="michroma text-sm">{title}</span>
    </div>
  );
};

const HomeNav = () => {
  const tabs = [
    { title: "Personal", route: "/" },
    { title: "Works", route: "/works" },
  ];

  return (
    <div className="flex justify-center text-white mb-8">
      <div className="flex justify-center items-center w-[20rem] space-x-10">
        {tabs.map(({ title, route }) => {
          return <Item key={title} title={title} route={route} />;
        })}
      </div>
    </div>
  );
};

export default HomeNav;
