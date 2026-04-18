export default function Headbands() {

  const images = [
    "/images/blackdiamond.jpeg",
    "/images/blackdiamond1.jpeg",
    "/images/emerald.jpeg",
    "images/leatherheadbands.jpeg",
    "/images/headbands.jpeg",
    "/images/luxjean.jpeg",
    "/images/imagecol.jpeg",
    "/images/seashells.jpeg",
    "/images/cherry.jpeg",
    "/images/coll.jpeg",
    "images/doubleside.jpeg",
    "images/forestgreen.jpeg",
    "images/bluestoneset.jpeg",
    "images/backbraid.jpeg",
    "/images/pearl.jpeg",
    "/images/purplebraid.jpeg",
    "/images/royalblue.jpeg",
    "/images/rubin.jpeg",
    "/images/RubyNoir.jpeg",
    "/images/seastar.jpeg",
    "images/silverset.jpeg",
    "images/whitedouble.jpeg",

    // add all your image names here
  ];
  return (
   <div className="page gallery-page">
      <div className="gallery-container">
        <h1 className="gallery-title">Headbands</h1>
        <p className="gallery-subtitle">
   Handmade headbands collection.
   </p>
  <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Headbands ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}