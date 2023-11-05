import "src/styles/App.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Carousel } from "./components/Carousel/Carousel";
import { Description } from "./components/Description/Description";
import { Price } from "./components/Price/Price";
import { Counter } from "./components/Counter/Counter";
import { Button } from "./components/Button/Button";
import Cart from "src/assets/images/icon-cart.svg?react";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className='wrapp'>
        <Description />
        <Price />
        <Counter />
        <Button>
          <Cart />
          <span>Add to cart</span>
        </Button>
      </div>
    </>
  );
}

export default App;
