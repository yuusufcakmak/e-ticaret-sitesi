const Register = () => {
  return (
    <div className="account-column">
      <h2>Kaydol</h2>
      <form>
        <div>
          <label>
            <span>
              Kullanıcı adı<span className="required">*</span>
            </span>
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            <span>
              E-mail adresinizi giriniz <span className="required">*</span>
            </span>
            <input type="email" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Şifre <span className="required">*</span>
            </span>
            <input type="password" />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <p>
            Kişisel verileriniz deneyiminizi desteklemek için kullanılacaktır Bu
            web sitesi genelinde, hesabınıza erişimi yönetmek ve belgemizde
            açıklanan diğer amaçlar <a href="#">Gizlilik politikalarımız.</a>
          </p>
          <button className="btn btn-sm">Kaydol</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
