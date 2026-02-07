import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewStory.scss";

function ViewStory() {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch(`/db.json/${id}`)
      .then((res) => res.json())
      .then((data) => setStory(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="ViewStoryPage">
      {story ? (
        <div className="StoryContainer">
          <img src={story.image} alt="Story" className="StoryImage" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ViewStory;
