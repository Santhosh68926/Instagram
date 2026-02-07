import { useEffect, useRef, useState } from "react";
import "./StoryViewer.scss";

function StoryViewer({ stories, currentIndex, onClose, setIndex }) {
  const videoRef = useRef();
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);

  const story = stories[currentIndex];

  // const stories = [
  //   { id: 1, reelId: 3, user: { username: "tamil_cinema", profile_pic: "/users/u1.jpg" } },
  //   { id: 2, reelId: 5, user: { username: "nature_love", profile_pic: "/users/u2.jpg" } },
  //   { id: 3, reelId: 8, user: { username: "vijay_official", profile_pic: "/users/u3.jpg" } },
  //   { id: 4, reelId: 10, user: { username: "fitness_raj", profile_pic: "/users/u4.jpg" } },
  //   { id: 5, reelId: 13, user: { username: "travel_diary", profile_pic: "/users/u5.jpg" } },
  //   { id: 6, reelId: 17, user: { username: "dhoni_fan", profile_pic: "/users/u6.jpg" } },
  //   { id: 7, reelId: 19, user: { username: "cinema_updates", profile_pic: "/users/u7.jpg" } },
  //   { id: 8, reelId: 20, user: { username: "kollywood", profile_pic: "/users/u8.jpg" } },
  //   { id: 9, reelId: 21, user: { username: "friends_forever", profile_pic: "/users/u9.jpg" } },
  //   { id: 10, reelId: 24, user: { username: "nature_clicks", profile_pic: "/users/u10.jpg" } }
  // ];


  // auto next
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          nextStory();
          return 0;
        }
        return p + 1;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextStory = () => {
    if (currentIndex < stories.length - 1) {
      setIndex(currentIndex + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const prevStory = () => {
    if (currentIndex > 0) {
      setIndex(currentIndex - 1);
      setProgress(0);
    }
  };

  return (
    <div className="StoryViewer">

      <div className="StoryContainer">

        <div className="ProgressBar">
          <div style={{ width: `${progress}%` }}></div>
        </div>

        <i className="bi bi-x-lg close" onClick={onClose}></i>

        <div className="StoryUser">
          <img src={story.user.profile_pic} />
          <span>{story.user.username}</span>
        </div>

        <i
          className={`bi ${muted ? "bi-volume-mute" : "bi-volume-up"} sound`}
          onClick={() => setMuted(!muted)}
        ></i>

        <video
          ref={videoRef}
          src={`/reelsVideo/reel${story.reelId}.mp4`}
          autoPlay
          muted={muted}
          playsInline
        />


        <div className="tap left" onClick={prevStory}></div>
        <div className="tap right" onClick={nextStory}></div>

      </div>
    </div>
  );
}

export default StoryViewer;
