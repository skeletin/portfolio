import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../../../svgs/Logo";
import { GrProjects } from "react-icons/gr";
import { BiPlus } from "react-icons/bi";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../../../endpoints/admin/AdminEndpoints";

const AdminLinks = () => {
  const { pathname } = useLocation();

  const links = [
    {
      path: "/admin/dashboard",
      title: "Projects",
      icon: <GrProjects />,
    },
    {
      path: "/admin/dashboard/create",
      title: "Create ",
      icon: <BiPlus />,
    },
  ];

  return (
    <div className="flex flex-col mt-20 space-y-4">
      {links.map((link) => {
        const isActive = pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center space-x-2 michroma text-xs w-full p-3 rounded text-white 
              ${isActive ? "bg-gray-800" : "bg-black hover:bg-gray-800/50"}`}
          >
            <span>{link.title}</span>
            <span>{link.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

const AdminPanel = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => navigate("/admin/login"),
  });

  return (
    <section className="flex flex-col border-white h-full p-3 justify-between">
      <div>
        <Link to="/">
          <Logo />
        </Link>
        <AdminLinks />
      </div>
      <button
        onClick={() => mutate()}
        className="michroma text-xs  text-white text-start p-3 hover:bg-gray-900 rounded"
      >
        Log out
      </button>
    </section>
  );
};

export default AdminPanel;
