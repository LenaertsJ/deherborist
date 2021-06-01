function Cart() {
  console.log(localStorage.getItem("cart"));
  return (
    <main className="container">
      <div className="inner-cart">
        <h3 className="cart-title">
          <span>m</span>andje van julie lenaerts
        </h3>
        <div class="cart-content flex">
          <div className="cart-products flex">
            <div class="product-details">
              <h4 className="product-title">Product: Morning dew</h4>
              <p className="product-category">Type: infusies</p>
            </div>
            <div className="product-price flex">
              <p className="quantity">Aantal: 2</p>
              <p className="price">Prijs: 4.5 €</p>
            </div>
          </div>
          <div className="cart-totals flex">
            <p className="quantity">Totaal aantal: 2</p>
            <p className="price">Totale prijs: 9 €</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
