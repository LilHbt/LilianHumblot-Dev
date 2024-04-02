import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Contact from "../Page/Contact/Contact";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import Projects from "../Page/Projects/Projects";

const Navigation = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {["/", "/LilianHumblot-Dev"].map((path) => (
          <Route key={path} path={path} element={<Home />} />
        ))}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default Navigation;
