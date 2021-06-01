function Cart() {
  console.log(localStorage.getItem("cart"));
  return (
    <main className="container">
      <div className="inner-cart">
        <h3 className="cart-title">mandje van julie lenaerts</h3>
        <div className="cart-products">
          <div class="product-details">
            <h4 className="product-title">Morning dew</h4>
            <p className="product-category">infusies</p>
          </div>
          <div className="product-price">
            <p className="product-price-total">4.5 €</p>
            <p className="product-quantity">2</p>
          </div>
        </div>
        <div className="cart-totals">
          <p className="cart-totals-quantity">2</p>
          <p className="cart-totals-price">9 €</p>
        </div>
      </div>
    </main>
  );
}

export default Cart;
