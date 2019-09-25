import React from "react";
// import { Link } from "react-router-dom";
// import coverphoto from "../photog/coverphoto.jpg";

function Home() {
  //props
  // const routeToShop = event => {
  //   event.preventDefault();
  //   props.history.push("/item-list");
  // };
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="..." alt="First slide"></img>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Second slide"></img>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Third slide"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// {/* //  <div className="home-wrapper">
// //       <div className="login-header">
// //         <div className="Options">
// //           <div className="Option">
// //             <Link to="/SignIn">
// //               <button type="Submit">Sign In</button>
// //             </Link>
// //             <Link to="/SignUp">
// //               <button type="Submit">Sign Up</button>
// //             </Link>
// //             <Link to="/item-list">
// //               <button onClick={routeToShop} className="md-button shop-button">
// //                 Shop now!
// //               </button>
// //             </Link>
// //           </div>
// //           {/* <img className="home-image" src={coverphoto} alt="" /> */}
// {/* //         </div>
// //       </div>
// //     </div> */} */}
