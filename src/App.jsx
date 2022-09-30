import { useEffect, useState, StrictMode } from "react";

import Notification from "./Notification.jsx";
import NotificationContext from "./NotificationContext.jsx";

function App() {
  const [NOTIFICATIONS, setNOTIFICATIONS] = useState([]);
  const [status, setStatus] = useState("loading");
  const [activeNotif, setActiveNotif] = useState();

  useEffect(() => {
    requestData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestData() {
    const data = await fetch("./data.json");
    const res = await data.json();
    let active = 0;

    setNOTIFICATIONS(res.notification);
    setStatus("sucess");
    res.notification.forEach((notif) => (notif.status ? active++ : ""));
    setActiveNotif(active);
  }

  const cleanNotifications = () => {
    if (activeNotif) {
      setActiveNotif(0);
    }
  };

  return (
    <StrictMode>
      <NotificationContext.Provider value={{ activeNotif, setActiveNotif }}>
        <main className="font-jakarta max-w-3xl bg-neutral-white shadow-xl rounded-xl p-2 sm:p-8 m-4">
          <header className="text-neutral-dark-blue flex justify-between md:gap-72 mb-5">
            <div className="flex justify-center items-center gap-2 sm:gap-4">
              <h1 className="font-bold text-xl sm:text-2xl">Notifications</h1>
              <div className="w-8 h-7 sm:w-10 sm:h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                <p className="text-neutral-50 font-bold">{activeNotif}</p>
              </div>
            </div>
            <button
              className="text-neutral-500 font-semibold text-sm sm:text-md"
              onClick={() => cleanNotifications()}
            >
              Mark all as read
            </button>
          </header>
          {status === "loading" ? (
            <div className="text-center text-neutral-500">Loading...</div>
          ) : (
            <ol className="flex flex-col gap-3">
              {NOTIFICATIONS.map((notif) => (
                <Notification key={notif.id} props={notif} />
              ))}
            </ol>
          )}
        </main>
      </NotificationContext.Provider>
    </StrictMode>
  );
}
export default App;
