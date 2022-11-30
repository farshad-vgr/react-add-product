import { useState, useRef } from "react";

import "./AddProduct.css";

const AddProduct = ({ onAdd }) => {
  const [ title, setTitle ] = useState("");
  const inputRef = useRef();

  const submitForm = (event) => {
    event.preventDefault();

    if (title.trim().length === 0) {
      alert("Enter a name for your product!!");
      setTitle("");
      inputRef.current.focus();
    } else {
      onAdd({ title });
      setTitle("");
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <form className="add-product-form" onSubmit={submitForm}>
        <div className="form-control">
          <input type="text" ref={inputRef} placeholder="Add Product..." value={title} onChange={(e) => setTitle(e.target.value)} maxLength={15} />
        </div>
        <button type="submit" className="form-btn">
          Add<sup>+</sup>
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
