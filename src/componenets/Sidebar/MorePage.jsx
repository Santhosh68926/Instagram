import "./MorePage.scss";
import { useNavigate } from "react-router-dom";

function MorePage() {
  const navigate = useNavigate();

  const handleClick = (type) => {
    if (type === "logout") {
      alert("Account logged out!");
      navigate("/");
    } else {
      alert(`${type} page opening...`);
    }
  };

  return (
    <div className="MorePage">
      <h2>Settings & Activity</h2>

      <div className="MoreItem" onClick={() => handleClick("Saved")}>
        <div className="left">
          <i className="bi bi-bookmark"></i>
          <span>Saved</span>
        </div>
        <i className="bi bi-chevron-right"></i>
      </div>

      <div className="MoreItem" onClick={() => handleClick("Archive")}>
        <div className="left">
          <i className="bi bi-clock-history"></i>
          <span>Archive</span>
        </div>
        <i className="bi bi-chevron-right"></i>
      </div>

      <div className="MoreItem" onClick={() => handleClick("Your Activity")}>
        <div className="left">
          <i className="bi bi-activity"></i>
          <span>Your Activity</span>
        </div>
        <i className="bi bi-chevron-right"></i>
      </div>

      <div className="MoreItem" onClick={() => handleClick("Notifications")}>
        <div className="left">
          <i className="bi bi-bell"></i>
          <span>Notifications</span>
        </div>
        <i className="bi bi-chevron-right"></i>
      </div>

      <div className="MoreItem" onClick={() => handleClick("Privacy")}>
        <div className="left">
          <i className="bi bi-shield-lock"></i>
          <span>Privacy</span>
        </div>
        <i className="bi bi-chevron-right"></i>
      </div>

      <div className="MoreItem" onClick={() => handleClick("Help")}>
        <div className="left">
          <i className="bi bi-question-circle"></i>
          <span>Help</span>
        </div>
        <i className="bi bi-chevron-right"></i>
      </div>

      <div
        className="MoreItem logout"
        onClick={() => handleClick("logout")}
      >
        <div className="left">
          <i className="bi bi-box-arrow-right"></i>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default MorePage;
