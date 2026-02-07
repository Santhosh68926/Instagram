import { useState, useRef, useEffect } from "react";
import "./MessagesPage.scss";

const chatsData = [
  { id: 1, user: "Arun", last: "Hey bro!", img: "https://i.pravatar.cc/150?img=11" },
  { id: 2, user: "kavi", last: "Where are you?", img: "https://i.pravatar.cc/150?img=12" },
  { id: 3, user: "Maran", last: "Call me", img: "https://i.pravatar.cc/150?img=13" },
];

function MessagesPage() {
  const [selected, setSelected] = useState(null);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const endRef = useRef(null);

  const sendMessage = () => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { msg: text, me: true }]);
    setText("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="MessagesPage">
      
      {/* LEFT CHAT LIST */}
      <div className="ChatList">
        <h3>Messages</h3>

        {chatsData.map((c) => (
          <div
            key={c.id}
            className={`ChatUser ${selected?.id === c.id ? "active" : ""}`}
            onClick={() => setSelected(c)}
          >
            <img src={c.img} alt="" />
            <div>
              <b>{c.user}</b>
              <p>{c.last}</p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT CHAT WINDOW */}
      <div className="ChatWindow">
        {selected ? (
          <>
            <div className="ChatHeader">
              <img src={selected.img} alt="" />
              <h4>{selected.user}</h4>
            </div>

            <div className="Messages">
              {messages.map((m, i) => (
                <div key={i} className={`Bubble ${m.me ? "me" : "them"}`}>
                  {m.msg}
                </div>
              ))}
              <div ref={endRef}></div>
            </div>

            <div className="SendBox">
              <input
                placeholder="Message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleEnter}
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </>
        ) : (
          <div className="EmptyState">
            <h3>Select a chat</h3>
            <p>Start conversation 💬</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessagesPage;
