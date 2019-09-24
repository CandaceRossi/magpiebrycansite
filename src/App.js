import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NavTag from "./NavTag";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import AddToEmailList from "./AddToEmailList";

function App() {
  return (
    <div className="App">
      <NavTag />
      <AddToEmailList />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/components/AddToEmailList" component={AddToEmailList} />
      </Switch>
    </div>
  );
}

export default App;

// const [product, setProduct] = useState();
// // const [note, setNote ] = useState({})
// // const contactUs = note => {
// //   const newNote = {
// //     id: Date.now(),
// //     title: note.title,
// //     body: note.body
// //   }
// //   setNote([...notes, newNote])
// // }
// import ItemsList from "./ItemsList";
// import Item from "./Item";
// import data from "./data";

// {
//   /* <Route
//           path="/components/ItemList"
//           render={props => <ItemsList {...props} items={product} />}
//         />
//         <Route
//           path="/components/Item"
//           render={props => <Item {...props} items={product} />}
//         /> */
// }
