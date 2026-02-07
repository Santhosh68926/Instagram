import "./MobileHeader.scss";
import { useNavigate } from "react-router-dom";

function MobileHeader({ open, onToggle }) {
  const navigate = useNavigate();

  return (
    <div className="MobileHeader">
      <i
        className={`bi ${open ? "bi-x-lg" : "bi-list"}`}
        onClick={onToggle}
      ></i>

      <span className="logo">Instagram</span>

      <div className="icons">
        <i 
          className="bi bi-heart"
          onClick={() => navigate("/notifications")}
        ></i>

        <i 
          className="bi bi-send"
          onClick={() => navigate("/messages")}
        ></i>
      </div>
    </div>
  );
}

export default MobileHeader;
