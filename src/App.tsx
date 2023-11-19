import "src/styles/App.scss";
import { ProductCart } from "./components/ProductCart/ProductCart";
import { Navbar } from "./components/navbar/Navbar";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Navbar />
      <ProductCart />
    </CartContextProvider>
  );
}

export default App;
