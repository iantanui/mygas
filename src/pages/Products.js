import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Calendar } from "react-bootstrap-icons";
import ProductItem from "../components/products/ProductItem";
import ProductDialog from "../components/products/ProductDialog";

const initialProducts = [
  { id: 1, name: "Product 1", quantity: 10, price: 100 },
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentProduct, setCurrentProduct] = useState({
    id: "",
    name: "",
    quantity: "",
    price: "",
  });

  const handleShowModal = (type, product) => {
    setModalType(type);
    if (products) {
      setCurrentProduct(product);
    } else {
      setCurrentProduct({ id: "", name: "", quantity: "", price: "" });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSave = () => {
    if (modalType === "Add") {
      const newProduct = { ...currentProduct, id: products.length + 1 };
      setProducts([...products, newProduct]);
    } else if (modalType === "Edit") {
      const updatedProducts = products.map((product) =>
        product.id === currentProduct.id ? currentProduct : product
      );
      setProducts(updatedProducts);
    }
    handleCloseModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Products</h1>
          <p>List of products</p>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Calendar size={24} />
        </Col>
      </Row>

      <Row className="my-3">
        <Col>
          <Button variant="primary" onClick={() => handleShowModal("Add")}>
            Add Product
          </Button>
        </Col>
      </Row>

      <Row className="my-3">
        <Col>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              handleShowModal={handleShowModal}
            />
          ))}
        </Col>
      </Row>

      <ProductDialog
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSave}
        currentProduct={currentProduct}
        handleChange={handleChange}
        modalType={modalType}
      />
    </Container>

    // <div className="container">
    //   <h1>Products</h1>
    //   {/* Add products content here */}
    //   { /* </ProductItem /> */}
    //   {/* <ProductDialog /> */}
    // </div>
  );
};

export default Products;
