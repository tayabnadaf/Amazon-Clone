import React from "react";
import "./Home.css";
import Product from "./Product";

function Home({ onAddToCart }) {

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_1x._CB597740150_.jpg"
        alt=""
      />

      {/* Product id,name, proce,image */}
      <div className="home__row">
        <Product
          id="1233"
          title="rellme narzo 60X 5G (Stellar Green,6GB,128GB Storag) Up to 2TB External Memory | 50 MP AI Primary Camera | Segments only 33W Supervooc Charge"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_SY200_.jpg"
          onAddToCart={onAddToCart}
        />
        <Product
          id="1233"
          title="JBL Newly Launched Wave Flex in-Ear Wireless Earbuds TWS with Mic,App for Custom Extra Bass EQ, 32Hrs Battery, Quick Charge, IP54 Water & Dust Proof, Ambient Aware, Talk-Thru,Google FastPair (Black)"
          price={11.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/31JICL9In-L._SX300_SY300_QL70_FMwebp_.jpg"
          onAddToCart={onAddToCart}
        />
      </div>

      <div className="home__row">
        <Product
          id="1233"
          title="SUPCASE Unicorn Beetle Edge Series Case for iPhone 13 (2021 Release) 6.1 Inch, Slim Frame Clear Case with TPU Inner Bumper & Transparent Back (Black)"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/41zcak2suyL._SX300_SY300_QL70_FMwebp_.jpg"
          onAddToCart={onAddToCart}
        />
        <Product
          id="1233"
          title="VALORANT: 475 Valorant Points (India) - Digital Code - Email Delivery"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/41wko-1gwtL._SX300_SY300_QL70_FMwebp_.jpg"
          onAddToCart={onAddToCart}
        />
        <Product
          id="1233"
          title="Puma Womens Ultimate Ease WNS Walking Shoe"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61dazA6znQL._SY675_.jpg"
          onAddToCart={onAddToCart}
        />
        <Product
          id="1233"
          title="Harry Potter Set of 7 Boxed Book Set Original Complete Set From 1 to 7 - 2024 Kids and Adults"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61pldZCR1RL._AC_UY327_FMwebp_QL65_.jpg"
          onAddToCart={onAddToCart}
        />
      </div>
      <div className="home__row">
        <Product
          id="1234"
          title="VIDA Powered by Hero V1 Plus Electric Scooter | 100 km Range in one Charge | Top Speed 80 kmph (Blue)
          "
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/71ZylCJbG4L._SX355_.jpg"
          onAddToCart={onAddToCart}
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
