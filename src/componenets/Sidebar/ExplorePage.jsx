import "./ExplorePage.scss";

const explorePosts = [
  { id: 1, img: "https://picsum.photos/500?1", likes: "1.2k" },
  { id: 2, img: "https://picsum.photos/500?2", likes: "980" },
  { id: 3, img: "https://picsum.photos/500?3", likes: "2.1k" },
  { id: 4, img: "https://picsum.photos/500?4", likes: "450" },
  { id: 5, img: "https://picsum.photos/500?5", likes: "3k" },
  { id: 6, img: "https://picsum.photos/500?6", likes: "1.8k" },
  { id: 7, img: "https://picsum.photos/500?7", likes: "720" },
  { id: 8, img: "https://picsum.photos/500?8", likes: "1.1k" },
  { id: 9, img: "https://picsum.photos/500?9", likes: "2.6k" },
];

function ExplorePage() {
  return (
    <div className="ExplorePage">
      <div className="ExploreGrid">
        {explorePosts.map((post) => (
          <div className="ExploreItem" key={post.id}>
            <img src={post.img} alt="explore" />

            <div className="Overlay">
              <i className="bi bi-heart-fill"></i>
              <span>{post.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePage;
