import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Products";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./Components/NotFound";
import ProductDetail from "./Components/ProductDetail";
function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/product" style={{ textDecoration: "none" }}>
            Product
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
