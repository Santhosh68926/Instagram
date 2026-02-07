import { useEffect, useState } from "react";
import StoryViewer from "./StoryViewer";
import "./Stories.scss";

function Stories() {
  const [stories, setStories] = useState([]);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setStories(data.story || []));
  }, []);

    const storiesData = [
    { id: 1, reelId: 3, user: { username: "santhosh_17", profile_pic: "/assets/it's me.jpg" } },
    { id: 2, reelId: 5, user: { username: "Tamil_18", profile_pic: "/assets/images..jpg" } },
    { id: 3, reelId: 8, user: { username: "vignesh_09", profile_pic: "/assets/self.image.jpg" } },
    { id: 4, reelId: 10, user: { username: "sathish_13", profile_pic: "/assets/nature  pic-1.jpg" } },
    { id: 5, reelId: 13, user: { username: "Aravind_14", profile_pic: "/users/u5.jpg" } },
    { id: 6, reelId: 17, user: { username: "vicky_09", profile_pic: "/users/u6.jpg" } },
    { id: 7, reelId: 19, user: { username: "Thala_07", profile_pic: "/users/u7.jpg" } },
    { id: 8, reelId: 20, user: { username: "maran_07", profile_pic: "/users/u8.jpg" } },
    { id: 9, reelId: 21, user: { username: "nairobi_15", profile_pic: "/users/u9.jpg" } },
    { id: 10, reelId: 24, user: { username: "defi-not_07", profile_pic: "/users/u10.jpg" } }
  ];

  return (
    <>
      <div className="Stories">
        {stories.map((story, i) => (
          <div
            key={story.id}
            className="StoryItem"
            onClick={() => setIndex(i)}
          >
            <img src={story.user.profile_pic} className="StoryDP" alt="no image" />
            <span>{story.user.username}</span>
          </div>
        ))}
      </div>

      {index !== null && (
        <StoryViewer
          stories={storiesData}
          currentIndex={index}
          setIndex={setIndex}
          onClose={() => setIndex(null)}
        />
      )}
    </>
  );
}

export default Stories;
