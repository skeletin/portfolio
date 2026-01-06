import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./components/features/Home";
import AdminLayout from "./components/layouts/AdminLayout.jsx";
import { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence } from "motion/react";
import SplashScreen from "./components/features/SplashScreen/index.jsx";

const Login = lazy(() => import("./components/features/Admin/Login/index.jsx"));

const Dashboard = lazy(() =>
  import("./components/features/Admin/Dashboard/index.jsx")
);

const AdminProjects = lazy(() =>
  import("./components/features/Admin/Dashboard/Projects/index.jsx")
);
const CreateProject = lazy(() =>
  import("./components/features/Admin/Dashboard/CreateProject/index.jsx")
);

function App() {
  // const [showSplash, setShowSplash] = useState(true);

  // useEffect(() => {
  //   setShowSplash(false);
  // }, []);

  return (
    <BrowserRouter>
      {/* <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence> */}

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<AdminProjects />} />
            <Route path="create" element={<CreateProject />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
