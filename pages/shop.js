import { useState } from "react";
import Link from "next/link";

function Shop() {
  const [section, setSection] = useState("");

  return (
    <main className="container">
      <div className="inner-container shop">
        <div className="section-shop tea">
          <Link href="/shop/infusies">
            <div className="section-title">
              <h2>infusies</h2>
            </div>
          </Link>
        </div>
        <div className="section-shop art">
          <Link href="/shop/bloemenkunst">
            <div className="section-title ">
              <h2>bloemenkunst</h2>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Shop;
