import React, { useState} from "react";
import { Route } from "react-router-dom";
import NavTagg from "./components/Navtagg";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import data from "./data";
import Home from "./components/Home";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";
import ShoppingCart from "./components/ShoppingCart";

// import AddToEmailList from "./components/AddToEmailList";

const App = () => {
  const [items] = useState(data);
  const [cart, setCart] = useState([]);
  // const { products, addItem } = useContext(ProductContext);

  const addItems = item => {
    setCart([...cart, item]);
    console.log(cart)
  };

  const removeItem = id => {
    setCart(cart.filter(item => item.id !== id));
  };
  return (
    <ProductContext.Provider value={{ items, addItems }}>
      <CartContext.Provider value={{ cart, removeItem }}>
        <div className="App">
          <div className="component-list">
            <NavTagg />
            <Route
              exact
              path="/ItemList"
              render={props => (
                <ItemList items={items} {...props} addItem={addItems} />
              )}
            />
            <Route
              exact
              path="/ItemList/:id"
              render={props => (
                <Item items={items} {...props} addItem={addItems} />
              )}
            />
            <Route
              path="/cart"
              render={props => (
                <ShoppingCart
                  cart={cart}
                  // items={items}
                  // products={products}
                  // addItem={addItems}
                  // {...props}
                  removeItem={removeItem}
                />
              )}
            />

            <Route exact path="/" component={Home} />
          </div>
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
