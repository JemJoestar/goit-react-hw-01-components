import PropTypes from 'prop-types';
import {
  Profile as ProfileCard,
  Description,
  Name,
  Tag,
  Location,
  Stats,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <li>
          <p>Followers</p>
          <p>{stats.followers}</p>
        </li>
        <li>
          <p>Views</p>
          <p>{stats.views}</p>
        </li>
        <li>
          <p>Likes</p>
          <p>{stats.likes}</p>
        </li>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
  
};
