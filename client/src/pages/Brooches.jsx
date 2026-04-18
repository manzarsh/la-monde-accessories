export default function Brooches() {
  const images = [
    "/images/mapleleaf.jpeg",
    "/images/buta.jpeg",
    "/images/coupleLove.jpeg",
    "/images/coupleLove1.jpeg",
    "/images/strawberry.jpeg",
    "/images/strawberrybackside.jpeg",
    "/images/feather.jpeg",
    "/images/flower.jpeg",
    "/images/kharibulbulsymbol.jpeg",
    "/images/kharibulbulflower.jpeg",
    "/images/peacock.jpeg",
    "images/couple.jpeg",
    "images/stethoscope.jpeg",
    "images/kharibulbul.jpeg",


  ];

  return (
    <div className="page gallery-page">
      <div className="gallery-container">
        <h1 className="gallery-title">Brooches</h1>
        <p className="gallery-subtitle">
          Handcrafted brooches designed with sparkle, detail, and love.
        </p>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Brooch ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}