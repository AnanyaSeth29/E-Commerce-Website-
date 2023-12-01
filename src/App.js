import logo from "./logo.svg";
import Hero from "./Components/Hero";
import Seasons from "./Components/Seasons";
import Grid from "./Components/Grid";
import Feedback from "./Components/Feedback";
import Brands from "./Components/Brands";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactUs";
import LoginForm from "./Components/SignUp";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/signin" element={<LoginForm />} />
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/grid" element={<Grid />} />
            <Route path="/blog" element={<Feedback />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/contact" element={<ContactForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function DefaultLayout() {
  return (
    <div>
      <Hero />
      <Seasons />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
