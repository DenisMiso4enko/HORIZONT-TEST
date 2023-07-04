import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Details from "../../pages/Details/Details";
import About from "../../pages/About/About";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="image/:id" element={<Details />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
