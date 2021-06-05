import React from "react";

function Checkout() {
  return (
    <main className="container">
      <form>
        <label for="name">Voornaam:</label>
        <input type="text" name="firstname"></input>
        <label for="lastname">Familienaam:</label>
        <input type="text" name="lastname"></input>
        <label for="email">Email:</label>
        <input type="text" name="email"></input>
        <label for="street">Straat:</label>
        <input type="text" name="street"></input>
        <label for="housenr">Huisnummer:</label>
        <input type="text" name="housenr"></input>
        <label for="city">Stad:</label>
        <input type="text" name="city"></input>
        <label for="country">Land:</label>
        <input type="text" name="country"></input>
      </form>
    </main>
  );
}

export default Checkout;
