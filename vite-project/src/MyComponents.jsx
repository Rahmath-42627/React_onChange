import React, { useState } from "react";
function MyComponents() {
  const [name, setName] = useState("guest");
  const [quantity, setquantity] = useState();
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function updateName(event) {
    setName(event.target.value);
  }
  function handleQuantityOnchange(event) {
    setquantity(event.target.value);
  }
  function handleCommentonChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(e) {
    setShipping(e.target.value);
  }

  return (
    <>
      <div>
        <input value={name} onChange={updateName} />
        <p>Name:{name}</p>

        <input
          value={quantity}
          onChange={handleQuantityOnchange}
          type="number"
        ></input>
        <p>Quantity{quantity}</p> 

        <textarea
          value={comment}
          onChange={handleCommentonChange}
          placeholder="Enter instruction"
        />
        <p>Comments:{comment}</p>
        

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an Option</option>
          <option value="Visa"> Visa</option>
          <option value="Master card">Master card</option>
          <option value="Rupay">Rupay</option>
          <option value="American Express"> American Express</option>
        </select>
        <p>Payment:{payment}</p>

        <label>
          <input
            type="radio"
            value="Pick Up"
            checked={shipping === "pick Up"}
            onChange={handleShippingChange}
          />
          Pick Up
        </label>
        <br />

        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
          />
          Delivery
        </label>
        <p>Shipping:{shipping}</p>

      </div>
    </>
  );
}
export default MyComponents;
