// import { useState } from "react";
import { useEffect } from "react";
import Notification from "./Notification.jsx";

//  useEffect(() => {
//    requestPets();
//  }, []); // eslint-disable-line react-hooks/exhaustive-deps

function App() {
  let NOTIFICATIONS = [1, 2, 3, 4];

  useEffect(() => {
    requestData();
  }, []);

  async function requestData() {
    const data = await fetch("./data.json");
    const res = await data.json();
    NOTIFICATIONS = res.notification;
    console.log(NOTIFICATIONS);
  }

  return (
    <main className="font-jakarta max-w-3xl bg-neutral-white border-2 border-black rounded-md p-6">
      <header className="text-neutral-dark-blue flex justify-between gap-72">
        <div className="flex justify-center items-center gap-4">
          <h1 className="font-bold text-2xl">Notifications</h1>
          <div className="w-10 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
            <p className="text-neutral-50 font-bold">3</p>
          </div>
        </div>
        <button onClick={() => console.log("hola")}>Mark all as read</button>
      </header>
      {NOTIFICATIONS.map((notif) => (
        <Notification key={notif} />
      ))}
    </main>
  );
}
export default App;
