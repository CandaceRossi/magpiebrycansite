import React, { useState, useEffect } from "react";
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
// import {CartProvider} from "./contexts/CartContext";
import ShoppingCart from "./components/ShoppingCart";
import Maglogo from "./components/Maglogo";
import Slideshow from "./components/Slideshow";
import BottomPage from "./components/BottomPage";
import FooterPage from "./components/FooterPage";


// import AddToEmailList from "./components/AddToEmailList";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

const App = () => {
  const [items] = useState(data);
  const [hasError, setError] = useState(false);
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [payload, setPayloader] = useState({});

useEffect(() => {
localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);


  //add item function
  const addItem = (item) => {
    setCart([...cart, item]);
    console.log("yo get at these", item)
  };

  // async function addItem(id, quantity) {
  //   try {
  //     const response = await fetch("http://localhost:4000/cart", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         itemId: id,
  //         quantity: quantity,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //     let data = await response.json()
  //     console.log(data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }


  //remove item function
  const removeItem = id => {
    setCart([...cart].filter(item => item.id !== id));
  };

// API Get Method
  // async function fetchData() {
  //   const res = await fetch("http://localhost:4000/product");
  //   res
  //     .json()
  //     .then((res) => {
  //       console.log(res.data);
  //       setItems(res.data);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }
  // async function addItem(id, quantity) {
  //   try {
  //     const response = await fetch("http://localhost:4000/cart", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         productId: id,
  //         quantity: quantity,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     });
  //     let data = await response.json();
  //     alert("Item Added To Cart");
  //     console.log(data);
  //   } catch (err) {
  //     alert("Something Went Wrong");
  //     console.log(err);
  //   }
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log(items);

  //API Fetch Cart
  async function fetchCart() {
    const res = await fetch("http://localhost:4000/cart");
    res
      .json()
      .then((res) => {
        console.log(res.data.items);
        setCart(res.data.items);
        setPayloader(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }
  // async function increaseQty(id) {
  //   try {
  //     const res = await fetch("http://localhost:4000/cart", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         itemId: id,
  //         quantity: 1,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     });
  //     console.log(res);
  //     fetchCart();
  //     alert("Item Increamented");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  async function emptyCart(props) {
    try {
      const res = await fetch("http://localhost:4000/cart/empty-cart", {
        method: "DELETE",
      });
      await res.json();
      fetchCart();
      props.history.push("/");
    } catch (err) {
      console.log(err);
    }
  }
  // useEffect(() => {
  //   fetchCart();
  // }, []);

  return (
    <ProductContext.Provider value={{ items, addItem }}>
    <CartContext.Provider value={{ cart, removeItem, fetchCart, emptyCart }}>
      {/* <CartProvider value={{ cart, removeItem }}> */}
        <div className="App">

          <div className="component-list">
            <Maglogo />

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
                    {...props}
                    removeItem={removeItem}/>
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
            <footer className="endofpage">
            <Slideshow />
            <BottomPage />
            <FooterPage />
            </footer>
          </div>
        </div>
      {/* </CartProvider> */}
       </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
