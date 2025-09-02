import useAdmin from "../../../../hooks/useAdmin";
import useNavigateHome from "../../../../hooks/useNavigateHome";

import AdminPanel from "./AdminPanel";
import AdminResources from "./AdminResources";

const Dashboard = () => {
  const { data } = useAdmin();
  useNavigateHome(data);

  return (
    <main className="flex h-full">
      <AdminPanel />
      <AdminResources />
    </main>
  );
};

export default Dashboard;
