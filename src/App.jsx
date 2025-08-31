import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./components/features/Home";

function App() {
  console.log(import.meta.env.VITE_BACKEND_URL);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
