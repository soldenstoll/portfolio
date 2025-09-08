import "./BackgroundImage.css"

function BackgroundImage({ path }) {
  return (
    <div className="background-image-wrapper">
      <span 
        className="background-image"
        style={{
          background: `url(${path}) top left no-repeat`,
          backgroundSize: "cover"
        }}
      ></span>
    </div>
  );
}

export default BackgroundImage;
