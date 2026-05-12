import React from "react";
import style from "./Hero.module.css";

function Hero() {
  return (
    <section className={style.hero}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={style.heroContent}>
              <h1>Welcome to Our Digital Marketing Agency</h1>
              <p>
                We help businesses grow online with our expert digital marketing
                services.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="/Mascot Light Orange.png"
              alt="Hero Image"
              className={style.imgFluid}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
