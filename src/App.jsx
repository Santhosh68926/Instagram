import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MobileSidebarLayout from "./layouts/MobileSidebarLayout.jsx";
import Home from "./pages/Home/Home";
// import Profile from "./pages/Profile/Profile";

import SearchPage from "./componenets/Sidebar/SearchPage";
import ExplorePage from "./componenets/Sidebar/ExplorePage";
import ReelsPage from "./componenets/Sidebar/ReelsPage";
import MessagesPage from "./componenets/Sidebar/MessagesPage";
import NotificationsPage from "./componenets/Sidebar/NotificationsPage";
import CreatePage from "./componenets/Sidebar/CreatePage";
import ProfilePage from "./componenets/Sidebar/ProfilePage";
import MorePage from "./componenets/Sidebar/MorePage";
import ThreadsPage from "./componenets/Sidebar/ThreadsPage";

function App() {
  return (
    <div className="AppComponent">
          <BrowserRouter>
      <MainLayout>
        <Routes>

          <Route path="/" element={<Home />} />

          {/* 🔥 MOBILE HEADER + BACK BUTTON APPLY AGURA PAGES */}
          <Route element={<MobileSidebarLayout />}>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/reels" element={<ReelsPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/threads" element={<ThreadsPage />} />
            <Route path="/more" element={<MorePage />} />
          </Route>

        </Routes>
      </MainLayout>
    </BrowserRouter>
    </div>
  );
}

export default App;
