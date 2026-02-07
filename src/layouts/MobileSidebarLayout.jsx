import { Outlet, useLocation } from "react-router-dom";
import MobilePageHeader from "../componenets/MobilePageHeader/MobilePageHeader";

const titleMap = {
  "/search": "Search",
  "/explore": "Explore",
  // "/reels": "Reels",
  "/messages": "Messages",
  "/notifications": "Notifications",
  "/create": "Create",
  "/profile": "Profile",
  "/threads": "Threads",
  "/more": "More"
};

function MobileSidebarLayout() {
  const { pathname } = useLocation();
  const title = titleMap[pathname];

  return (
    <>
      {title && <MobilePageHeader title={title} />}
      <Outlet />
    </>
  );
}

export default MobileSidebarLayout;
