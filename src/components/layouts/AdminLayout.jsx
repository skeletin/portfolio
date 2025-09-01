import { Outlet } from "react-router";
const AdminLayout = () => {
  return (
    <div className="flex flex-col h-full bg-black">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
