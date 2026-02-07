import "./ThreadsPage.scss";

const threads = [
  {
    id: 1,
    user: "santhosh",
    text: "Life la calm ah irukanum da.",
  },
  {
    id: 2,
    user: "arun",
    text: "Gym + discipline = success.",
  },
  {
    id: 3,
    user: "meena",
    text: "Nature dhan best therapy 🌿",
  },
];

function ThreadsPage() {
  return (
    <div className="ThreadsPage">
      <h2>Threads</h2>

      {threads.map((t) => (
        <div className="ThreadCard" key={t.id}>
          <div className="User">@{t.user}</div>
          <p>{t.text}</p>
          <div className="Actions">
            <i className="bi bi-heart"></i>
            <i className="bi bi-chat"></i>
            <i className="bi bi-send"></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThreadsPage;
