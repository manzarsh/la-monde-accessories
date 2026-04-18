export default function Gallery() {
  const images = [
    "/images/blackdiamond.jpeg",
    "/images/blackdiamond1.jpeg",
    "/images/brand.jpeg",
    "/images/buta.jpeg",
    "/images/coupleLove.jpeg",
    "/images/coupleLove1.jpeg",
    "/images/emerald.jpeg",
    "/images/strawberry.jpeg",
    "/images/strawberrybackside.jpeg",
    "/images/feather.jpeg",
    "/images/flower.jpeg",
    "/images/headbands.jpeg",
    "/images/imagecol.jpeg",
    "/images/kharibulbulsymbol.jpeg",
    "/images/kharibulbulflower.jpeg",
    "/images/LOGO.jpeg",
    "/images/luxjean.jpeg",
    "/images/peacock.jpeg",
    "/images/seashells.jpeg",
    "/images/babyset.jpeg",
    "/images/cherry.jpeg",
    "/images/heartEaring.jpeg",
    "/images/blackshellearing.jpeg",
    "/images/coll.jpeg",
    "images/couple.jpeg",
    "images/doubleside.jpeg",
    "images/forestgreen.jpeg",
    "images/backbraid.jpeg",
    "/images/mapleleaf.jpeg",
    "/images/pearl.jpeg",
    "/images/purplebraid.jpeg",
    "/images/royalblue.jpeg",
    "images/bluestone1.jpeg",
    "/images/rubin.jpeg",
    "/images/RubyNoir.jpeg",
    "/images/seastar.jpeg",
    "images/silverset.jpeg",
    "images/forestgreen1.jpeg",
    "images/stethoscope.jpeg",
    "/images/bluestonebraslet.jpeg",
    "images/pation&protection.jpeg",
    "images/oceanwhisper.jpeg",
    "images/whitedouble.jpeg",
    "images/kharibulbul.jpeg",
    "images/pink.jpeg",
    "images/leatherheadbands.jpeg",
    "images/bluestoneset.jpeg",
    // add all your image names here
  ];

  return (
    <div className="page gallery-page">
      <div className="gallery-container">
        <h1 className="gallery-title">Gallery</h1>
        <p className="gallery-subtitle">
          A showcase of handmade accessories.
        </p>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`La Monde accessory ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}