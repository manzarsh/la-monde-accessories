import { Link } from "react-router-dom";

export default function Designs() {
  const collections = [
    {
      title: "Brooches",
      desc: "Statement brooches with crystals, beadwork, and sparkle.",
      img: "/images/flower.jpeg",
      to: "/brooches",
      cta: "Browse Brooches",
    },
    {
      title: "Headbands",
      desc: "Elegant headbands handcrafted for special moments.",
      img: "/images/emerald.jpeg",
      to: "/headbands",
      cta: "Browse Headbands",
    },
    {
      title: "Bracelets & Earrings",
      desc: "Occasional small pieces — simple, delicate, and handmade.",
      img: "/images/heartEaring.jpeg",
      to: "/bracletsandearings",
      cta: "See More",
    },
    {
      title: "Custom Design",
      desc: "Have an idea? I can create a unique piece made just for you.",
      img: "/images/peacock.jpeg",
      to: "/contact",
      cta: "Request Custom",
    },
  ];

  return (
    <div className="page designs-page">
      <div className="gallery-container">
        <h1 className="gallery-title">Designs</h1>
        <p className="gallery-subtitle">
          Explore curated collections — handcrafted with love, detail, and story.
        </p>

        <div className="designs-grid">
          {collections.map((c) => (
            <div className="design-card" key={c.title}>
              <div className="design-imgWrap">
                <img src={c.img} alt={c.title} />
              </div>

              <div className="design-content">
                <h3 className="design-title">{c.title}</h3>
                <p className="design-desc">{c.desc}</p>

                <Link to={c.to} className="btn design-btn">
                  {c.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="designs-note">
          <p className="muted">
            Looking for something personal? Visit <Link to="/contact">Contact</Link> to request a custom design.
          </p>
        </div>
      </div>
    </div>
  );
}