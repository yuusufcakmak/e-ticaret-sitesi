import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.121609393221!2d39.213717115127536!3d38.681006279601705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c16f6f6f6f6f6f%3A0x6f6f6f6f6f6f6f6f!2sF%C4%B1rat%20%C3%9Cniversitesi%20Bilgisayar%20M%C3%BChendisli%C4%9Fi%20Binas%C4%B1!5e0!3m2!1str!2str!4v1620475644102!5m2!1str!2str"
            width="100%"
            height="500"
            style={{
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h4>Bizimle İletişime Geçin...</h4>
            <h2>Temasta Olalım</h2>
            <p>
              In hac habitasse platea dictumst. Pellentesque viverra sem nec
              orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius
              vel leo a, pretium lobortis metus. Vivamus consectetur consequat
              justo.
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                  Adınız
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  E-mail Adresiniz.
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Konu
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Mesajınız
                  <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  defaultValue=""
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-sm form-button">Mesaj Yolla</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Lc Hakiki</strong>
                  <p className="contact-street">
                    Lc Hakiki Fırat Üniversitesi Mühendislik Kampüsü
                  </p>
                  <a href="tel:Phone: +90 1234 567 88">
                    Phone: +90 1234 567 88
                  </a>
                  <a href="mailto:Email: ietisim@example.com">
                    Email: iletisim@example.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Açık Saatler</strong>
                  <p className="contact-date">Pazartesi-Cuma : 09.00-21.00</p>
                  <p>Hafta Sonu Kapalı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
