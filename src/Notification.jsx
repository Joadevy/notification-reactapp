import { useContext, useState } from "react";
import NotificationContext from "./NotificationContext.jsx";

const Notification = ({ props }) => {
  const { image, name, data, time, type, content, status } = props;
  const [notification, setNotification] = useState(status);
  const { activeNotif, setActiveNotif } = useContext(NotificationContext);

  const handleNotification = () => {
    setNotification(false);
    setActiveNotif(activeNotif - 1);
  };

  return (
    <li // eslint-disable-line
      onClick={notification === true ? () => handleNotification() : null}
      onKeyDown={notification === true ? () => handleNotification() : null}
      role={notification === true ? "button" : "presentation"}
      tabIndex={notification === true ? 0 : null}
      className={
        notification === true
          ? "flex gap-2 p-4 w-full rounded-lg border-2 border-transparent hover:border-2 hover:border-neutral-200 hover:cursor-pointer"
          : "flex gap-2 p-4 w-full rounded-lg border-2 border-transparent hover:border-2 hover:border-neutral-200"
      }
    >
      <div className="w-[6%]">
        <img src={image} alt={name} className="w-full" />
      </div>
      <div className="flex flex-col justify-center leading-none gap-2 w-11/12">
        <div className="flex gap-2 text-neutral-600">
          <div>
            <span className="font-bold hover:text-primary-blue">{name}</span>{" "}
            <span className="text-neutral-500">{data}</span>{" "}
            {type === "group" ? (
              <span className="font-bold hover:text-neutral-600 text-primary-blue">
                {content}
              </span>
            ) : type === "reaction" ? (
              <span className="font-bold text-neutral-600">{content}</span>
            ) : (
              ""
            )}
          </div>
          {notification === true ? (
            <div className="group w-2 h-2 self-center rounded-full bg-primary-red"></div>
          ) : (
            ""
          )}
        </div>
        <p className="text-xs text-neutral-400">{time}</p>
      </div>
    </li>
  );
};

export default Notification;
