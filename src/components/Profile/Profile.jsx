import {
  Profile as ProfileCard,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
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
                <p>{followers}</p>
            </li>
            <li>
                <p>Views</p>
                <p>{views}</p>
            </li>
            <li>
                <p>Likes</p>
                <p>{likes}</p>
            </li>
        </Stats>
    </ProfileCard>
  );
};

