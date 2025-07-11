import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import PreLoader from "./components/PreLoader";

import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PreLoader/>
    <div className="container mx-auto px-4">
      <Navbar />
      <App />
      <Footer /> {/* ✅ Ini harus panggil komponen, bukan <footer/> */}
    </div>
  </React.StrictMode>
);
