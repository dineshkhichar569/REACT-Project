import React, { useState } from "react";
import logo1 from "./assets/01.jpg";
import logo2 from "./assets/02.jpg";
import logo3 from "./assets/03.jpg";
import logo4 from "./assets/04.jpg";
import logo5 from "./assets/05.jpg";
import logo6 from "./assets/06.jpg";
import logo7 from "./assets/07.jpg";
import logo8 from "./assets/08.jpg";

export default function Items(probs) {
  let [data, setData] = useState([
    { name: "Nike Airforce Shoe",         price: 99, image: logo1 },
    { name: "White Nike Air Force",       price: 91, image: logo2 },
    { name: "Nike high top Sneaker",      price: 89, image: logo3 },
    { name: "White Nike air force Shoe",  price: 39, image: logo4 },
    { name: "White and Red Nike Shoe",    price: 69, image: logo5 },
    { name: "All Black Nike Shoe",        price: 89, image: logo6 },
    { name: "U.S. POLO Red Sneakers",     price: 59, image: logo7 },
    { name: "White Adidas Shoe",          price: 79, image: logo8 }
  ]);

  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const itemInCart = cart.find((It) => It.name === item.name); //////    Condition   //////

    if (itemInCart) {
      let ifInCart = cart.map((In_Cart) =>
        In_Cart.name === item.name
          ? { ...In_Cart, quantity: In_Cart.quantity + 1 }
          : In_Cart
      );

      setCart(ifInCart);
    } else {
      let elseInCart = [...cart, { ...item, quantity: 1 }];

      setCart(elseInCart);
    }
  };

  const PLUS = (item) => {
    let plusItem = cart.map((cartItem) =>
      cartItem.name === item.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    setCart(plusItem);
  };

  const MINUS = (item) => {
    let minusItem = cart.map(cartItem => {
      if (cartItem.name === item.name) {
        if (cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return null; // Mark item for removal
        }
      }
      return cartItem;
    }).filter(cartItem => cartItem !== null)

    setCart(minusItem); // Filter out marked items
  };


  const totalCost = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0); ////  Here, initially total is 0 /////

    ////// current item: { name: "ASIAN Men's Thar-13 Sneaker", price: 99, quantity: 1 }
    //////  calculation: total + item.price * item.quantity is 0 + 99 * 1 = 99
    /////    new total: 99
  };
  return (
    <>
      <main>
        <div className="container">
          {data.map((product, index) => (
            <div key={index}>
              <img src={product.image} alt="image" />
              <b>{product.name}</b>
              <p>${product.price}</p>
              <button onClick={() => addItem(product)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <div className="AddCart">
          <h2>Add To Cart :</h2>

          <div className="one">
            {cart.map((product, index) => (
              <div key={index} className="one-In">
                <img src={product.image} alt="image" />

                <div className="one-in-one">
                  <div className="name-price">
                    <b>{product.name}</b>
                    <p>${product.price}</p>
                  </div>
                  <div className="addremove_btn">
                    <button
                      onClick={() => MINUS(product)}>-</button>
                    <p>{product.quantity}</p>
                    <button onClick={() => PLUS(product)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="totalPrice">
            <h3>Total Payment : </h3>
            <h3>${totalCost()}</h3>
          </div>
          <button className="buy-btn">Buy Now</button>
        </div>
      </main>
    </>
  );
}
