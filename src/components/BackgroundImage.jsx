import useMediaQuery from "../hooks/useMediaQuery";
import "./BackgroundImage.css"

function BackgroundImage({ path }) {
  const renderMobile = useMediaQuery("(max-width: 768px)")

  if (renderMobile) {
    return (
      <div className="background-image-wrapper">
        <span 
          className="background-image"
          style={{
            backgroundImage: `url(/images/mobile-${path})`,
          }}
        ></span>
      </div>
    );
  }

  return (
    <div className="background-image-wrapper">
      <span 
        className="background-image"
        style={{
          backgroundImage: `url(/images/${path})`,
        }}
      ></span>
    </div>
  );
}

export default BackgroundImage;
