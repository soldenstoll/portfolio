import "./BackgroundImage.css"

function BackgroundImage({ path }) {
  return (
    <span 
      className="background-image"
      style={{
        background: `url(${path}) center center no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></span>
  );
}

export default BackgroundImage;
