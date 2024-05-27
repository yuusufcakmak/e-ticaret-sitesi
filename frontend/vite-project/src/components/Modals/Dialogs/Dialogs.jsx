import "./Dialogs.css";
import Proptypes from "prop-types";

const Dialog = ({ isDialogShow, setIsDialogShow }) => {
  return (
    <div className={`modal-dialog ${isDialogShow ? "show" : ""}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={() => setIsDialogShow(false)}>
          <i className="bi bi-x"></i>
        </button>
        <div className="modal-image">
          <img src="img/modal-dialog.jpg" alt="" />
        </div>
        <div className="popup-wrapper">
          <div className="popup-content">
            <div className="popup-title">
              <h3>KAMPANYALARDAN HABERDAR OL...</h3>
            </div>
            <p className="popup-text">
              Bültenimize kaydolun ve bulacağınız özel fırsatlardan yararlanın
            </p>
            <form className="popup-form">
              <input type="text" placeholder="E-mail Adresinizi giriniz." />
              <button className="btn btn-primary">Abone Ol</button>
              <label>
                <input type="checkbox" />
                <span>Bu açılır pencereyi bir daha gösterme</span>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal-overlay"
        onClick={() => setIsDialogShow(false)}
      ></div>
    </div>
  );
};

export default Dialog;
Dialog.propTypes = {
  isDialogShow: Proptypes.func,
  setIsDialogShow: Proptypes.func,
};
