import { useEffect, useState } from "react";
import blackdiamond from "../assets/hero/blackdiamond.jpeg";
import kharibulbul from "../assets/hero/kharibulbul.jpeg";
import emerald from "../assets/hero/emerald.jpeg";
import coupleLove from "../assets/hero/coupleLove.jpeg";


const imgs = [blackdiamond, kharibulbul, emerald, coupleLove];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % imgs.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      <img className="heroImg" src={imgs[i]} alt="La Monde accessories" />
      <div className="heroOverlay" />
      <div className="heroInner">
        <div className="tag">Handmade • Elegant • One-of-a-kind</div>
        <h1 className="heroTitle">La Monde accessories</h1>
        <p className="heroText">
          Luxury handmade accessories — crafted with sparkle, detail, and love.
        </p>

        <div className="heroBtns">
          <a className="btnPrimary" href="#featured">Explore Collection</a>
          <a className="btnGhost" href="/contact">Custom Order</a>
        </div>

        <div className="dots">
          {imgs.map((_, idx) => (
            <button
              key={idx}
              className={idx === i ? "dot on" : "dot"}
              onClick={() => setI(idx)}
              aria-label={`Hero ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}