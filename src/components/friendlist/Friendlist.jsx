import FriendListItem from "../friendlistitem/FriendListItem";
import PropTypes from "prop-types";
import css from "./friendlist.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css["friend-list"]}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id.toString()}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
