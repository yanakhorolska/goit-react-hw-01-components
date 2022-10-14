import {UserStats, UserStatsItem, UserStatsLabel, UserStatsQuantity, UserCard, UserDescription, UserImage, UserName, UserTag, UserLocation } from './Profile.styled';

export const Profile = ({avatar, username, tag, location, stats}) => {
    return (
      <UserCard>
  <UserDescription>
    <UserImage
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <UserLocation>{location}</UserLocation>
  </UserDescription>

  <UserStats>
    <UserStatsItem>
      <UserStatsLabel>Followers</UserStatsLabel>
      <UserStatsQuantity>{stats.followers }</UserStatsQuantity>
    </UserStatsItem>
    <UserStatsItem>
      <UserStatsLabel>Views</UserStatsLabel>
      <UserStatsQuantity>{stats.views}</UserStatsQuantity>
    </UserStatsItem>
    <UserStatsItem>
      <UserStatsLabel>Likes</UserStatsLabel>
      <UserStatsQuantity>{stats.likes}</UserStatsQuantity>
    </UserStatsItem>
  </UserStats>
</UserCard>
  )
};
