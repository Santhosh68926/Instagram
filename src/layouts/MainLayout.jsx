import Sidebar from "../componenets/Sidebar/Sidebar";
import Suggestions from "../componenets/Suggestions/Suggestions";
import "./MainLayout.scss";
import { useState } from "react";
import MobileHeader from "../componenets/MobileHeader/MobileHeader";

function MainLayout({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="MainLayout">
       
<MobileHeader
  open={openSidebar}
  onToggle={() => setOpenSidebar(!openSidebar)}
/>

<Sidebar
  open={openSidebar}
  setOpen={setOpenSidebar}
/>

      <div className="MainCenter">
        {children}
      </div>

      <div className="MainSuggestions">
        <Suggestions />
      </div>

    </div>
  );
}

export default MainLayout;
