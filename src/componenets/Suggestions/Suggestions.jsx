import { useState, useEffect } from "react";
import axios from "axios";
import "./Suggestions.scss";

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

useEffect(() => {
  axios.get("/db.json")
    .then((res) => {
      setProfile(res.data.profile);          // ✅ profile only
      setSuggestions(res.data.suggestion);   // ✅ suggestion only
    })
    .catch((err) => console.log(err));
}, []);

  const handleFollow = (id, username) => {
    axios
      .post("/db.json", { id, username })
      .then(() => alert(`Followed ${username}`))
      .catch((err) => console.log(err));
  };

  return (
    <aside className="SuggestionsPage">
      {profile && (
        <div className="ProfilePreview">
          <img src={profile.profile_pic} alt="Profile" className="ProfilePic" />
          <span className="Username">{profile.username}</span>
          <span className="Switch">Switch</span>
        </div>
      )}

      <div className="SuggestionsHeader">
        <span>Suggested for you</span>
        <b>See All</b>
      </div>

      <div className="SuggestionsList">
        {suggestions.length > 0 ? (
          suggestions.map((s) => (
            <div key={s.id} className="SuggestionItem">
              <img src={s.profile_pic} alt={s.username} className="ProfilePic" />
              <span className="Username">{s.username}</span>
              <button
                className="FollowButton"
                onClick={() => handleFollow(s.id, s.username)}
              >
                Follow
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </aside>
  );
}

export default Suggestions;
