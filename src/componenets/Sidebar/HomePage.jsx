import Stories from "../Stories/Stories";
import Posts from "../Posts/Posts";
import "./HomePage.scss";

function Home() {
  return (
    <main className="Home">
      <div className="HomeFeed">
        <Stories />
        <Posts />
      </div>
    </main>
  );
}

export default Home;
