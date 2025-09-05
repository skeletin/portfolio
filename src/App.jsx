import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./components/features/Home";
import Dashboard from "./components/features/Admin/Dashboard";
import Login from "./components/features/Admin/Login.jsx";
import AdminLayout from "./components/layouts/AdminLayout.jsx";
import AdminProjects from "./components/features/Admin/Dashboard/Projects/index.jsx";
import CreateProject from "./components/features/Admin/Dashboard/CreateProject/index.jsx";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import SplashScreen from "./components/features/SplashScreen/index.jsx";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setShowSplash(false);
  }, []);

  return (
    <BrowserRouter>
      {/* <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence> */}

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />}>
            <Route path="/admin/dashboard" element={<AdminProjects />} />
            <Route path="/admin/dashboard/create" element={<CreateProject />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
