import Feed from "../../componenets/Posts/Posts";
import Stories from "../../componenets/Stories/Stories";
import "./Home.scss";

function Home() {
  return (
    <>
    <div className="Home">
      <Stories />
      <Feed />
    </div>
    </>
  );
}

export default Home;
