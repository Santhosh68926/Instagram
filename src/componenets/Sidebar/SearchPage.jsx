import { useState } from "react";
import "./SearchPage.scss";

const dummyUsers = [
  { id: 1, username: "vijay_official", img: "https://i.pravatar.cc/150?img=1" },
  { id: 2, username: "tamil_cinema", img: "https://i.pravatar.cc/150?img=2" },
  { id: 3, username: "nature_love", img: "https://i.pravatar.cc/150?img=3" },
  { id: 4, username: "fitness_raj", img: "https://i.pravatar.cc/150?img=4" },
];

function SearchPage() {
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState([]);

  const filteredUsers = dummyUsers.filter((u) =>
    u.username.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (user) => {
    setRecent((prev) => [user, ...prev.filter((r) => r.id !== user.id)]);
    setQuery("");
  };

  const removeRecent = (id) => {
    setRecent((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="SearchPage">
      
      {/* Search bar */}
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <i className="bi bi-x-circle" onClick={() => setQuery("")}></i>
        )}
      </div>

      {/* Results */}
      {query && (
        <div className="SearchResults">
          {filteredUsers.length ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="SearchItem"
                onClick={() => handleSearch(user)}
              >
                <img src={user.img} alt="" />
                <span>{user.username}</span>
              </div>
            ))
          ) : (
            <div className="NoResult">No users found</div>
          )}
        </div>
      )}

      {/* Recent */}
      {!query && (
        <div className="RecentSearch">
          <div className="RecentHeader">
            <h4>Recent</h4>
            {recent.length > 0 && (
              <span onClick={() => setRecent([])}>Clear all</span>
            )}
          </div>

          {recent.length === 0 && (
            <div className="EmptyRecent">No recent searches</div>
          )}

          {recent.map((user) => (
            <div key={user.id} className="RecentItem">
              <div className="left">
                <img src={user.img} alt="" />
                <span>{user.username}</span>
              </div>
              <i
                className="bi bi-x"
                onClick={() => removeRecent(user.id)}
              ></i>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
