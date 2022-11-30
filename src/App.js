import { useState, useEffect, useRef, useCallback } from "react";

import ProductList from "./components/ProductList/ProductList";
import AddProduct from "./components/AddProduct/AddProduct";

const App = () => {
  const [products, setProducts] = useState([]);
  const appTitle = useRef(document.title);

  useEffect(() => (document.title = `${appTitle.current} (${products.length})`), [products.length]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:8000/products");

      const responoseData = await response.json();

      setProducts(responoseData);
    };

    sendRequest();
  }, []);

  const addProduct = useCallback(
    async (title) => {
      const response = await fetch("http://localhost:8000/products", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(title),
      });

      const responseData = await response.json();

      setProducts([...products, responseData]);
    },
    [products],
  );

  const deleteProduct = useCallback(
    async (id) => {
      await fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
      });

      setProducts(products.filter((item) => item.id !== id));
    },
    [products],
  );

  return (
    <div className="container">
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
};

export default App;
