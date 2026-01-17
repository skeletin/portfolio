import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./components/features/Home";
import AppInitializer from "./components/providers/AppInitializer.jsx";
import About from "./components/features/About/index.jsx";
import Projects from "./components/features/Projects/index.jsx";
import Project from "./components/features/Project/index.jsx";
import Contact from "./components/features/Contact/index.jsx";
import Experience from "./components/features/Experience/index.jsx";
import NotFound from "./components/features/NotFound/index.jsx";

function App() {
  return (
    <AppInitializer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:name" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppInitializer>
  );
}

export default App;
