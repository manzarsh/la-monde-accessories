export default function BraceletsAndEarrings() {
  const images = [
    "/images/heartEaring.jpeg",
    "/images/blackshellearing.jpeg",
    "/images/forestgreen.jpeg",
    "/images/bluestone1.jpeg",
    "/images/forestgreen1.jpeg",
    "/images/pink.jpeg",
    "/images/babyset.jpeg",
    "/images/bluestonebraslet.jpeg",
    "/images/pation&protection.jpeg",
    "/images/oceanwhisper.jpeg",
  ];

  return (
    <div className="page gallery-page">
      <div className="gallery-container">
        <h1 className="gallery-title">Bracelets & Earrings</h1>
        <p className="gallery-subtitle">
          Handmade bracelets and earrings collection.
        </p>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Bracelets and Earrings ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}