import { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.scss";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [unfollowed, setUnfollowed] = useState(false);

useEffect(() => {
  axios
    .get("/db.json")
    .then((res) => setProfile(res.data.profile)) // 👈 change
    .catch((err) => console.log(err));

  axios
    .get("/db.json")
    .then((res) => setFollowers(res.data.followers)) // 👈 change
    .catch((err) => console.log(err));
}, [unfollowed]);

  const handleOnChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async () => {
    axios
      .post("/db.json", profile)
      .then(() => console.log("Updated"))
      .catch((err) => console.log(err));
  };

  const handleUnFollow = (id) => {
    axios
      .delete(`/db.json/${id}`)
      .then(() => {
        alert("Unfollowed");
        setUnfollowed(!unfollowed);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <MobilePageHeader title="Profile" />
      <Profile />
    <div className="ProfilePage">
      {profile ? (
        <div className="ProfileInfo">
          <img src={profile.profile_pic} alt="Profile" className="ProfilePic" />
          <span className="Username">{profile.username}</span>

          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="profile_pic"
            value={profile.profile_pic}
            onChange={handleOnChange}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}

      <div className="FollowersList">
        {followers.length > 0 ? (
          followers.map((f) => (
            <div key={f.id} className="FollowerItem">
              <span>{f.username}</span>
              <button onClick={() => handleUnFollow(f.id)}>Unfollow</button>
            </div>
          ))
        ) : (
          <p>Loading followers...</p>
        )}
      </div>
    </div>
    </>
  );
}

export default Profile;
