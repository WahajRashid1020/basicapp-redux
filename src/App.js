import "./App.css";
import Hedaers from "./containers/Hedaers";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";
function App() {
  return (
    <>
      <Router>
        <Hedaers />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:productid" element={<ProductDetails />} />
          <Route>ERORR 404</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
