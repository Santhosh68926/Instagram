import "./NotificationsPage.scss";

const notifications = [
  { id: 1, text: "arun liked your post ❤️" },
  { id: 2, text: "kavi started following you 👤" },
  { id: 3, text: "meena commented: Nice reel 🔥" },
];

function NotificationsPage() {
  return (
    <div className="NotificationsPage">
      <h2>Notifications</h2>

      {notifications.map((n) => (
        <div key={n.id} className="NotificationItem">
          {n.text}
        </div>
      ))}
    </div>
  );
}

export default NotificationsPage;
