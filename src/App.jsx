import { useEffect, useState } from "react";
import Notification from "./Notification.jsx";

function App() {
  const [NOTIFICATIONS, setNOTIFICATIONS] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    requestData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestData() {
    const data = await fetch("./data.json");
    const res = await data.json();
    setNOTIFICATIONS(res.notification);
    setStatus("sucess");
    console.log(NOTIFICATIONS);
  }

  return (
    <main className="font-jakarta max-w-3xl bg-neutral-white shadow-xl rounded-md p-8 m-4">
      <header className="text-neutral-dark-blue flex justify-between gap-72 mt-5 mb-10">
        <div className="flex justify-center items-center gap-4">
          <h1 className="font-bold text-2xl">Notifications</h1>
          <div className="w-10 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
            <p className="text-neutral-50 font-bold">3</p>
          </div>
        </div>
        <button
          onClick={() => console.log("hola")}
          className="text-neutral-500 font-semibold"
        >
          Mark all as read
        </button>
      </header>
      {status === "loading" ? (
        <div className="text-center text-neutral-500">Loading...</div>
      ) : (
        <div className="flex flex-col gap-3">
          {NOTIFICATIONS.map((notif, index) => (
            <Notification key={index} props={notif} />
          ))}
        </div>
      )}
    </main>
  );
}
export default App;
