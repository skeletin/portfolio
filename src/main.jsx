import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ModelReadyProvider } from "./context/ModelReadyContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ModelReadyProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ModelReadyProvider>
  </ThemeProvider>,
);
