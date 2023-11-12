import "src/styles/App.scss";
import { Navbar } from "./components/navbar/Navbar";
import { CartContextProvider } from "./context/CartContext";
import { ProductCart } from "./components/ProductCart/ProductCart";

function App() {
  return (
    <CartContextProvider>
      <Navbar />
      <ProductCart />
    </CartContextProvider>
  );
}

export default App;
