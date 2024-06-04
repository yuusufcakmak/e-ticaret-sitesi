import { useContext } from "react";
import Proptypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../../context/CartProvider";
import "./Header.css";

const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);
  const user = localStorage.getItem("user");
  const { pathname } = useLocation();

  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
            SİZE ÖZEL İNDİRİM KUPONLARI VE AVANTAJLI FİYATLAR
            <a href="/shop">
              {" "}
              <br></br>
              ÜRÜNLERE BİR GÖZ AT İSTERSEN{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to="/" className="logo">
                <img
                  src="../../../../public/img/logo.png"
                  alt="LCHAKİKİ Logo"
                />
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"}`}
                    >
                      Ana Sayfa
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
                        <li>
                          <a href="#">Ev Temizliği</a>
                        </li>
                        <li>
                          <a href="#">Yeni Kreasyonlar</a>
                        </li>
                        <li>
                          <a href="#">Minimal Ev Eşyaları</a>
                        </li>
                        <li>
                          <a href="#">Old Money Style Ürünler</a>
                        </li>
                        <li>
                          <a href="#">Yaz Ürünleri</a>
                        </li>
                        <li>
                          <a href="#">İndirimli Ürünler</a>
                        </li>
                        <li>
                          <a href="#">Yeni Tarzını Keşfedelim</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/shop"}
                      className={`menu-link ${
                        pathname === "/shop" && "active"
                      }`}
                    >
                      Mağaza
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Ürün Çeşitleri
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Bedavadan Biraz Pahalı</a>
                              </li>
                              <li>
                                <a href="#">İndirimli Ürünler</a>
                              </li>
                              <li>
                                <a href="#">Çocuk 0-14</a>
                              </li>
                              <li>
                                <a href="#">Genç Kreasyonlar</a>
                              </li>
                              <li>
                                <a href="#">Yeni Reyonlarımız</a>
                              </li>
                              <li>
                                <a href="#">Hediyelik Eşyalar</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Gelmesini Umduklarımız
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Rolex Submariner</a>
                              </li>
                              <li>
                                <a href="#">O Gemi</a>
                              </li>
                              <li>
                                <a href="#">Matrix Siyah Erkek Deri Kaban</a>
                              </li>
                              <li>
                                <a href="#">Altın ve Altın Ürünleri</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="megamenu-single">
                          <a href="#">
                            <img src="/img/mega-menu.jpg" alt="" />
                          </a>
                          <h3 className="megamenu-single-title">
                            SİZDE ŞIK GİYİNENLER ARASINA KATILIN
                          </h3>
                          <h4 className="megamenu-single-subtitle">
                            Sadece Bir Tık Ötenizde
                          </h4>
                          <a
                            href="#"
                            className="megamenu-single-button btn btn-sm"
                          >
                            Şimdi Satın Al
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/blog"}
                      className={`menu-link ${
                        pathname === "/blog" && "active"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"}
                      className={`menu-link ${
                        pathname === "/contact" && "active"
                      }`}
                    >
                      İLETİŞİM
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/auth"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
                {/* <a href="#">
                  <i className="bi bi-heart"></i>
                </a> */}
                <div className="header-cart">
                  <Link to={"/cart"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
                {user && (
                  <button
                    className="search-button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Çıkış yapmak istediğinize emin misiniz?"
                        )
                      ) {
                        {
                          localStorage.removeItem("user");
                          window.location.href = "/";
                        }
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setIsSearchShow: Proptypes.func,
};
