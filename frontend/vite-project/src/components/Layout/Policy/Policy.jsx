import "./Policy.css";

const Policy = () => {
  return (
    <section className="policy">
      <div className="container">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-truck"></i>
            <div className="policy-texts">
              <strong>ÜCRETSİZ KARGO</strong>
              <span>100 TL VE ÜZERİ</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset"></i>
            <div className="policy-texts">
              <strong>7/24 CANLI DESTEK</strong>
              <span>24 saat online</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-arrow-clockwise"></i>
            <div className="policy-texts">
              <strong> 30 GÜN İÇİNDE İADE</strong>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-credit-card"></i>
            <div className="policy-texts">
              <strong> 3D SECURE ÖDEME YÖNTEMİ</strong>
              <span>Farklı taksit avantajlarıyla</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Policy;
