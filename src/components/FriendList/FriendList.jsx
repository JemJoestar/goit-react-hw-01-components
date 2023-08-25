import PropTypes from 'prop-types';
import { FriendListSection, Friend } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListSection>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </FriendListSection>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend status={isOnline}>
      <span></span>
      <img src={avatar} alt="User avatar" />
      <p>{name}</p>
    </Friend>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
