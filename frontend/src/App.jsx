import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/ui/DarkModeToggle";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import OAuthSuccess from "./pages/OAuthSuccess";
import AIProductGenerator from "./pages/AIProductGenerator";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-white text-black dark:bg-slate-950 dark:text-slate-100  min-h-screen">
        <Navbar />
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
  path="/products"
  element={
    <ProtectedRoute>
      <Products />
    </ProtectedRoute>
  }
/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
  path="/products/:id"
  element={
    <ProtectedRoute>
      <ProductDetails />
    </ProtectedRoute>
  }
/>
<Route
  path="/oauth-success"
  element={<OAuthSuccess />}
/>
<Route
    path="/ai-generator"
    element={<AIProductGenerator />}
/>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;