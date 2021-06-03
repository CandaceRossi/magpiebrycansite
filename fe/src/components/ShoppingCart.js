import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { cart, removeItem, fetchCart, increaseQty, emptyCart } = useContext(CartContext);

  console.log("CART ITEMS!?", cart);
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.map(item => (
        <ShoppingCartItem
          key={item.id}
          item={item}
          {...item}
          removeItem={removeItem}
        /> 
      ))}
      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>    
  </div>

//  <main>
//       <section>
//         <div className="banner-innerpage">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-md-6 align-self-center text-center">
//                 <h1 className="title">Cart Listing</h1>
//                 <h6 className="subtitle op-8">
//                   We are small team of creative people working together
//                 </h6>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="spacer">
//           <div className="container">
//             <div className="row mt-5">
//               <div className="col-lg-9">
//                 <div className="row shop-listing">
//                   <table className="table shop-table">
//                     <tr>
//                       <th className="b-0">Name</th>
//                       <th className="b-0">Price</th>
//                       <th className="b-0">Quantity</th>
//                       <th className="b-0 text-right">Total Price</th>
//                     </tr>
//                     {carts.map((item, i) => (
//                       <tr>
//                         <td>{item.productId.name}</td>
//                         <td>{item.productId.price}</td>
//                         <td>
//                           <button
//                             onClick={(e) => increaseQty(item.productId._id)}
//                             className="btn btn-primary btn-sm"
//                           >
//                             +
//                           </button>
//                           {item.quantity}
//                           <button className="btn btn-primary btn-sm">-</button>
//                         </td>
//                         <td className="text-right">
//                           <h5 className="font-medium m-b-30">{item.total}</h5>
//                         </td>
//                       </tr>
//                     ))}
//                     <tr>
//                       <td colspan="3" align="right">
//                         Subtotal :{payload.subTotal}
//                       </td>
//                       <td colspan="4" align="right">
//                         <button
//                           className="btn btn-danger"
//                           onClick={(e) => emptyCart()}
//                         >
//                           Empty cart
//                         </button>
//                       </td>
//                     </tr>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>


  );
    };

export default ShoppingCart;
