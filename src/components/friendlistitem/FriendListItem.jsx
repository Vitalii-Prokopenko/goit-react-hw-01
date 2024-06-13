import PropTypes from "prop-types";
import css from "./friendlistitem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css["item"]}>
      <img className={css["avatar"]} src={avatar} alt="Avatar" width="48" />
      <p className={css["name"]}>{name}</p>
      <p
        className={css["status"]}
        style={{ color: isOnline ? "green" : "red" }}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
