import "src/styles/App.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Carousel } from "./components/Carousel/Carousel";
import { Description } from "./components/Carousel/Description/Description";
import { Price } from "./components/Price/Price";
import { Counter } from "./components/Counter/Counter";
import { Submit } from "./components/Submit/Submit";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className='wrapp'>
        <Description />
        <Price />
        <Counter />
        <Submit />
      </div>
    </>
  );
}

export default App;
