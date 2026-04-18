import { Link } from "react-router-dom";

const cards = [
  {
    title: "Designs",
    desc: "Signature statement pieces",
    to: "/designs",
    img: "/images/peacock.jpeg",
  },
  {
    title: "Headbands",
    desc: "Elegant handmade headbands",
    to: "/headbands",
    img: "/images/RubyNoir.jpeg",
  },
  {
    title: "Brooches",
    desc: "Brooches that sparkle",
    to: "/brooches",
    img: "/images/mapleleaf.jpeg",
  },
  {
    title: "Gallery",
    desc: "See more creations",
    to: "/gallery",
    img: "/images/flower.jpeg",
  },
];

export default function Featured() {
  return (
    <section className="section" id="featured">
      <div className="sectionHead">
        <h2>Featured Collections</h2>
        <p className="muted">Browse by category</p>
      </div>

      <div className="grid4">
        {cards.map((c) => (
          <Link key={c.to} to={c.to} className="card">
            <div className="cardTop">
              <img
                className="feature-thumb"
                src={c.img}
                alt={c.title}
              />
              <div className="cardTitle">{c.title}</div>
            </div>
            <div className="cardDesc">{c.desc}</div>
            <div className="cardArrow">Explore →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}