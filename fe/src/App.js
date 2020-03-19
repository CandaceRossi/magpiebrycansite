import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Bavnar from "./components/Bavnar";
import Midnav from "./components/Midnav";
import Lastnav from "./components/Lastnav";
import Contact from "./components/Contact";
import About from "./components/About";
import Favorites from "./components/Favorites";
import SignUp from "./components/SignUp";
import Handbags from "./components/Handbags";
import HomeGoods from "./components/HomeGoods";
import Jewelry from "./components/Jewelry";
import Apparel from "./components/Apparel";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import data from "./data";
import Home from "./components/Home";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";
import ShoppingCart from "./components/ShoppingCart";
import Maglogo from "./components/Maglogo";


// import AddToEmailList from "./components/AddToEmailList";

const App = () => {
  const [items] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
    console.log(cart);
  };

  const removeItem = id => {
    setCart(...cart.filter(item => item.id !== id));
  };
  return (
    <ProductContext.Provider value={{ items, addItem }}>
      <CartContext.Provider value={{ cart, removeItem }}>
        <div className="App">
          <Maglogo />
          <div className="component-list">
            <div className="nav-style">
              <Bavnar cart={cart} />
              <Midnav />
              <Lastnav />
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/ItemList"
                render={props => (
                  <ItemList items={items} {...props} addItem={addItem} />
                )}
              />
              <Route
                exact
                path="/ItemList/:id"
                render={props => (
                  <Item items={items} {...props} addItem={addItem} />
                )}
              />
              <Route
                path="/ShoppingCart"
                render={props => (
                  <ShoppingCart
                    cart={cart}
                    items={items}
                    {...props}
                    setCart={setCart}
                    removeItem={removeItem}
                  />
                )}
              />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/About" component={About} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/Favorites" component={Favorites} />
              <Route exact path="/Jewelry" component={Jewelry} />
              <Route exact path="/Handbags" component={Handbags} />
              <Route exact path="/HomeGoods" component={HomeGoods} />
              <Route exact path="/Apparel" component={Apparel} />
            </Switch>
          </div>
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
