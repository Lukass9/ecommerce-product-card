import "src/styles/App.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Carousel } from "./components/Carousel/Carousel";
import { Description } from "./components/Description/Description";
import { Price } from "./components/Price/Price";
import { Counter } from "./components/Counter/Counter";
import { Button } from "./components/Button/Button";
import Cart from "src/assets/images/icon-cart.svg?react";
import { CartContextProvider } from "./context/CartContext";
import { useState } from "react";
import { Product } from "./types/type";

const INITIAL_STATE: Product = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  title: "sneakers company",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125.0,
  discountPrice: 125.0,
  discount: 50,
  images: [
    "src/assets/images/image-product-1.jpg",
    "src/assets/images/image-product-2.jpg",
    "src/assets/images/image-product-3.jpg",
    "src/assets/images/image-product-4.jpg",
  ],
  count: 0,
};

function App() {
  const [product, setProduct] = useState(INITIAL_STATE);
  const handleUpdateCount = (count: number) => {
    setProduct((prev) => ({ ...prev, count }));
  };
  return (
    <CartContextProvider>
      <Navbar />
      <Carousel images={product.images} />
      <div className='wrapp'>
        <Description
          name={product.name}
          title={product.title}
          description={product.description}
        />
        <Price
          price={product.price}
          discount={product.discount}
          discountPrice={product.discountPrice}
        />
        <Counter handleUpdateCount={handleUpdateCount} />
        <Button product={product}>
          <Cart />
          <span>Add to cart</span>
        </Button>
      </div>
    </CartContextProvider>
  );
}

export default App;
