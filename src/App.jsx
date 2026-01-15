import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./components/features/Home";
import AdminLayout from "./components/layouts/AdminLayout.jsx";
import { lazy, Suspense } from "react";
import AppInitializer from "./components/providers/AppInitializer.jsx";
import Projects from "./components/features/Projects/index.jsx";
import Project from "./components/features/Project/index.jsx";
import Contact from "./components/features/Contact/index.jsx";
import Experience from "./components/features/Experience/index.jsx";
import NotFound from "./components/features/NotFound/index.jsx";

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
const Upload = lazy(() =>
  import("./components/features/Admin/Dashboard/Upload/index.jsx")
);

function App() {
  return (
    <AppInitializer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:name" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<AdminProjects />} />
              <Route path="create" element={<CreateProject />} />
              <Route path="upload" element={<Upload />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppInitializer>
  );
}

export default App;
