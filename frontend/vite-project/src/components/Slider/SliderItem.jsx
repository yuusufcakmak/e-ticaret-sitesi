import PropTypes from "prop-types";

const SliderItem = ({ imageSrc }) => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">2024 KREASYONU</p>
        <h2 className="slider-heading">%70 İNDİRİMDEN BAŞLAYAN AVANTAJLARLA</h2>
        <a href="#" className="btn btn-lg btn-primary">
          ŞİMDİ KEŞFET
        </a>
      </div>
    </div>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  imageSrc: PropTypes.string,
};
