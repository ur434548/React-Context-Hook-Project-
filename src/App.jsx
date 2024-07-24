
import Product from "./components/Product.jsx";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import  ContextProvider  from "./store/Shopping-cart-Context.jsx";
function App() {
 

  return (
    <ContextProvider >
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product}  />
          </li>
        ))}
      </Shop>
    </ContextProvider>
  );
}

export default App;
