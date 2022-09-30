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
      className={
        activeNotif && notification === true
          ? "flex gap-2 p-4 w-full rounded-lg border-2 border-transparent bg-neutral-light-gray-blue hover:border-2 hover:border-neutral-200 hover:cursor-pointer"
          : "flex gap-2 p-4 w-full rounded-lg border-2 border-transparent hover:border-2 hover:border-neutral-200 "
      }
      role={activeNotif && notification === true ? "button" : "presentation"}
      tabIndex={activeNotif && notification === true ? 0 : null}
      onClick={
        activeNotif && notification === true ? () => handleNotification() : null
      }
      onKeyDown={
        activeNotif && notification === true ? () => handleNotification() : null
      }
    >
      <div className="w-12 sm:w-[6%]">
        <img alt={name} className="w-full" src={image} />
      </div>
      <div className="flex flex-col justify-center gap-2 w-11/12">
        <div className="flex sm:gap-1 text-neutral-600">
          <div className="flex">
            <p className="flex-shrink-2">
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
            </p>
          </div>
          <div className="w-5 flex items-center justify-center">
            {activeNotif && notification === true ? (
              // <div className="w-5 flex items-center justify-center border-2 border-yellow-300">
              <div className="w-2 h-2 rounded-full bg-primary-red" />
            ) : (
              // {/* </div> */}
              ""
            )}
          </div>
        </div>
        <p className="text-xs text-neutral-400">{time}</p>
        {type === "message" ? (
          <div className="m-2 p-4 border-[1px] border-neutral-200 rounded-lg text-neutral-500 hover:bg-neutral-gray-blue-200 hover:cursor-pointer">
            {content}
          </div>
        ) : (
          ""
        )}
      </div>
      {type === "comment/picture" ? (
        <div className="w-16 sm:w-12 hover:cursor-pointer ">
          <img alt="" src={content} />
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default Notification;
