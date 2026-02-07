import { useState, useEffect } from "react";
import "./Posts.scss";
import ShareModal from "../Sidebar/ShareModal";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});
  const [showComments, setShowComments] = useState({});
  const [openShare, setOpenShare] = useState(false);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts || []);
      })
      .catch((err) => console.log(err));
  }, []);

  // ❤️ LIKE TOGGLE
  const handleLike = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: likedPosts[postId]
                ? post.likes - 1
                : post.likes + 1,
            }
          : post
      )
    );
  };

  // 💬 COMMENT TOGGLE
  const toggleComments = (postId) => {
    setShowComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
  <div className="PostsContainer">
    {posts.length > 0 ? (
      posts.map((post) => (
        <div key={post.id} className="PostCard">
          
          {/* HEADER */}
          <div className="PostHeader">
            <img
              src={post.user.profile_pic}
              alt="Profile pic"
              className="ProfilePic"
            />
            <span className="UserName">{post.user.username}</span>
          </div>

          {/* IMAGE */}
          <img src={post.image} alt="post" className="PostImage" />

          {/* ACTIONS */}
          <div className="PostActions">
            <i
              className={`bi ${
                likedPosts[post.id] ? "bi-heart-fill liked" : "bi-heart"
              }`}
              onClick={() => handleLike(post.id)}
            ></i>

            <i
              className="bi bi-chat"
              onClick={() => toggleComments(post.id)}
            ></i>

            <i className="bi bi-send" onClick={() => setOpenShare(true)}></i>
          </div>

          {/* INFO */}
          <div className="PostInfo">
            <div className="Likes">{post.likes} Likes</div>
            <div className="Caption">{post.caption}</div>
          </div>

          {/* COMMENTS */}
          {showComments[post.id] && (
            <div className="CommentsSection">
              {post.comments.map((c, index) => (
                <div key={index} className="Comment">
                  <span className="CommentUser">{c.user}</span>
                  <span className="CommentText">{c.comment}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))
    ) : (
      <p>Loading Posts...</p>
    )}

    {/* 🔥 IMPORTANT — map ku veliya */}
    {openShare && <ShareModal onClose={() => setOpenShare(false)} />}
  </div>
);
}

export default Posts;
