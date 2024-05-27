import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="#">Ana Sayfa</a>
          </li>
          <li>
            <a href="#">Erkek</a>
          </li>
          <li>
            <a href="#">Pantolon</a>
          </li>
          <li>Jogger Eşofman Altı</li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
