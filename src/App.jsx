import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
// import Footer from "./components/footer/footer";
import DetailProduct from "./pages/detail-product/detail-product";
import Dashboard from "./pages/dashboard/dashboard";
import AddProduct from "./pages/add-product/add-product";
import EditProduct from "./pages/edit-product/edit-product";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<DetailProduct />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/add-product" element={<AddProduct />} />
          <Route path="dashboard/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
