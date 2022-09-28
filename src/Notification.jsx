const Notification = ({ props }) => {
  const { image, name, data, time, type, content, status } = props;
  // Should have a state with an active/disable notification and
  // a hover with cursor pointer if the notification is active to disable it.
  return (
    <div
      onClick={(e) => console.log("hola", e.target)} // Should change the active status of the notif
      onKeyDown={(e) => console.log("hola", e.target)} // Should change the active status of the notif
      role={status === true ? "button" : "banner"}
      tabIndex={0}
      className={
        status === true
          ? "flex gap-2 p-4 w-full rounded-lg border-2 border-transparent hover:border-2 hover:border-neutral-200 hover:cursor-pointer"
          : "flex gap-2 p-4 w-full rounded-lg border-2 border-transparent hover:border-2 hover:border-neutral-200"
      }
    >
      <div className="w-[6%]">
        <img src={image} alt={name} className="w-full" />
      </div>
      <div className="flex flex-col justify-center leading-none gap-2 w-11/12">
        <div className="relative border-2 text-neutral-600">
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
          {status === true ? (
            <div className="group w-2 h-2 self-center rounded-full bg-primary-red  absolute top-0 right-0"></div>
          ) : (
            ""
          )}
        </div>
        <p className="text-xs text-neutral-400">{time}</p>
      </div>
    </div>
  );
};

export default Notification;
