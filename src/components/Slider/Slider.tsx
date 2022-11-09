import "./style.scss";

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider_header">
        <h1 className="slider_header-title">The Power of Simplicity</h1>
        <p className="slider_header-content">
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </p>
      </div>
      <div className="slider_content">
        <button className="slider_content-button">
          <p className="slider_content-button-name">Learn</p>
        </button>
        <ul className="slider_content-navigation">
          <li className="slider_dot"></li>
          <li className="slider_dot"></li>
          <li className="slider_dot slider_dot-active"></li>
          <li className="slider_dot"></li>
          <li className="slider_dot"></li>
        </ul>
      </div>
    </div>
  );
};
