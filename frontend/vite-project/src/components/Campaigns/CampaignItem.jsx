import "./CampaignItem.css";

const CampaignItem = () => {
  return (
    <div className="campaign-item">
      <h3 className="campaign-title">
        Moda <br />
        Kapitalizm Köleleri <br />
        Alışveriş Hastaları
      </h3>
      <p className="campaign-desc">
        Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
      </p>
      <a href="#" className="btn btn-primary">
        Tümünü Görüntüle
        <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  );
};

export default CampaignItem;
