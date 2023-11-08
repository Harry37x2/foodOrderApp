import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./contexts/CartContext";
import { ModalContexProvider } from "./contexts/ModalContex";

function App() {
  return (
    <>
      <ModalContexProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart />
        </CartContextProvider>
      </ModalContexProvider>
    </>
  );
}

export default App;
