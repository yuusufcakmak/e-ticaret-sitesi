import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subscribe-row">
        <div className="container">
          <div className="footer-row-wrapper">
            <div className="footer-subscribe-wrapper">
              <div className="footer-subscribe">
                <div className="footer-subscribe-top">
                  <h3 className="subscribe-title">
                    Yeni ürün ve kampanyalar hakkında bilgi sahibi olmak için.
                  </h3>
                  <p className="subscribe-desc">
                    İlk siparişinde kullanabileceğin 100 TL kuponda bizden.
                  </p>
                </div>
                <div className="footer-subscribe-bottom">
                  <form>
                    <input
                      type="text"
                      placeholder="e-mail adresinizi giriniz."
                    />
                    <button className="btn">Abone Ol</button>
                  </form>
                  <p className="privacy-text">Abonelik hakları saklıdır. </p>
                </div>
              </div>
            </div>
            <div className="footer-contact-wrapper">
              <div className="footer-contact-top">
                <h3 className="contact-title">
                  Yardıma mı ihtiyacın var ?<br />
                  (+90) 123 456 78 90
                </h3>
                <p className="contact-desc">
                  08.00-17.00 saatleri içerisinde bizi bu numaradan
                  arayabilirsin.
                </p>
              </div>
              <div className="footer-contact-bottom">
                <div className="download-app">
                  <a href="#">
                    <img src="/img/footer/app-store.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/img/footer/google-play.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widgets-row">
        <div className="container">
          <div className="footer-widgets">
            <div className="brand-info">
              <div className="footer-logo">
                <a href="index.html" className="logo">
                  LOGO
                </a>
              </div>
              <div className="footer-desc">
                <p> LC HAKIKI KALİTE VE GÜVENİN ADRESİ.</p>
              </div>
              <div className="footer-contact">
                <p>
                  <a href="tel:555 555 55 55">(+800) 1234 5678 90</a> –{" "}
                  <a href="mailto:info@example.com">info@lchakiki.com</a>
                </p>
              </div>
            </div>
            <div className="widget-nav-menu">
              <h4>Bilgi</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Gizlilik Politikası</a>
                </li>
                <li>
                  <a href="#">İade Politikası</a>
                </li>
                <li>
                  <a href="#">Nakliye Politikası</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Hesap</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Panel</a>
                </li>
                <li>
                  <a href="#">Siparişlerim</a>
                </li>
                <li>
                  <a href="#">Favorilerim</a>
                </li>
                <li>
                  <a href="#">Hesap detayları</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Mağaza</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Ortaklık</a>
                </li>
                <li>
                  <a href="#">En çok satanlar</a>
                </li>
                <li>
                  <a href="#">İndirim</a>
                </li>
                <li>
                  <a href="#">Yeni gelenler</a>
                </li>
                <li>
                  <a href="#">İndirimli ürünler</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Kategoriler</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Kadınlar</a>
                </li>
                <li>
                  <a href="#">Erkekler</a>
                </li>
                <li>
                  <a href="#">Çantalar</a>
                </li>
                <li>
                  <a href="#">Dış Giyim</a>
                </li>
                <li>
                  <a href="#">Ayakkabı</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-row">
        <div className="container">
          <div className="footer-copyright">
            <div className="site-copyright">
              <p>
                Copyright 2024 © E-Commerce Theme. All right reserved. Powered
                by Fırat Üniversitesi.
              </p>
            </div>
            <a href="#">
              <img src="/img/footer/cards.png" alt="" />
            </a>
            <div className="footer-menu">
              <ul className="footer-menu-list">
                <li className="list-item">
                  <a href="#">Gizlilik Politikası</a>
                </li>
                <li className="list-item">
                  <a href="#">Şartlar ve Koşullar</a>
                </li>
                <li className="list-item">
                  <a href="#">İade politikası</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
