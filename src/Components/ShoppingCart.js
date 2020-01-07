import React from "react";

class ShoppingCart extends React.Component {
  state = {
    cart: [],
    shop: [
      { id: 35, name: "jumper", color: "red", price: 20 },
      { id: 42, name: "shirt", color: "blue", price: 15 },
      { id: 56, name: "pants", color: "green", price: 25 },
      { id: 71, name: "socks", color: "black", price: 5 },
      { id: 72, name: "socks", color: "white", price: 5 }
    ]
  };
  render() {
    const items = this.state.cart.map((item, key) => (
      <li key={item.id}>{item.name}</li>
    ));
    return (
      <div>
        ...............
        <ul>{items}</ul>
        {this.state.shop[0].name}
      </div>
    );
  }
}
export default ShoppingCart;
