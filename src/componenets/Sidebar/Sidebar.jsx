import { useNavigate } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
    <div className={`Sidebar ${open ? "open" : ""}`}>
      <div className="SidebarMenu">
        <div className="SidebarItem" onClick={() => handleNav("/")}>
          <i className="bi bi-house"></i>
          <span>Home</span>
        </div>

        <div className="SidebarItem" onClick={() => handleNav("/search")}>
          <i className="bi bi-search"></i>
          <span>Search</span>
        </div>

        <div className="SidebarItem" onClick={() => handleNav("/explore")}>
          <i className="bi bi-compass"></i>
          <span>Explore</span>
        </div>

        <div className="SidebarItem" onClick={() => handleNav("/reels")}>
          <i className="bi bi-play-circle"></i>
          <span>Reels</span>
        </div>

        <div className="SidebarItem" onClick={() => handleNav("/messages")}>
          <i className="bi bi-chat-dots"></i>
          <span>Messages</span>
        </div>

        <div className="SidebarItem" onClick={() => handleNav("/notifications")}>
          <i className="bi bi-heart"></i>
          <span>Notifications</span>
        </div>

        <div className="SidebarItem" onClick={() => handleNav("/create")}>
          <i className="bi bi-plus-square"></i>
          <span>Create</span>
        </div>

        <div className="SidebarItem" onClick={() => handleNav("/profile")}>
          <i className="bi bi-person-circle"></i>
          <span>Profile</span>
        </div>
      </div>

      <div className="SidebarBottom">
        <div className="SidebarItem" onClick={() => handleNav("/threads")}>
          <i className="bi bi-threads"></i>
          <span>Threads</span>
        </div>

        <div className="SidebarItem" onClick={() => handleNav("/more")}>
          <i className="bi bi-list"></i>
          <span>More</span>
        </div>
      </div>

    </div>
    </>
  );
}

export default Sidebar;
