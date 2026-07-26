
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";

import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <ErrorBoundary>

      <App />

      <Toaster position="top-right" />

    </ErrorBoundary>

  </StrictMode>
);