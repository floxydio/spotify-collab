import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <>
      <section className="main">
        <div className="container">
          <div className="tagline-wrapper">
            <div className="tagline-top">
              <h1>
                Listening is <span class="tagline-right">everything</span>
              </h1>
            </div>
            <div className="tagline-bottom">
              <h4>Jutaan lagu dan podcast. Tanpa kartu kredit.</h4>
              <button>
                <a href="#">DAPATKAN SPOTIFY FREE</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
