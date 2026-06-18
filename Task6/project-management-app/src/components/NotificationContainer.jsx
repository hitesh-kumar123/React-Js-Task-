import { useSelector, useDispatch } from "react-redux";
import { removeNotification } from "../redux/notificationSlice";

const NotificationContainer = () => {
  const dispatch = useDispatch();

  const notifications = useSelector(
    (state) => state.notifications.notifications,
  );

  const handleRemove = (id) => {
    dispatch(removeNotification(id));
  };

  return (
    <div className="toast-container">
      {notifications.map((notification) => (
        <div key={notification.id} className={`toast ${notification.type}`}>
          <p>{notification.message}</p>

          <button onClick={() => handleRemove(notification.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default NotificationContainer;
