import { useNavigate } from "react-router-dom";
import "./MobilePageHeader.scss";

function MobilePageHeader({ title }) {
  const navigate = useNavigate();

  return (
    <div className="MobilePageHeader">
      <i className="bi bi-arrow-left" onClick={() => navigate(-1)}></i>
      <span>{title}</span>
    </div>
  );
}

export default MobilePageHeader;
