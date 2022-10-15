import {
  ListItem,
  FriendImage,
  FriendName,
  IsOnline,
  IsOffline,
} from './FriendListItem.styled';

export const FriendListItem = ({ friend }) => {
  return (
    <ListItem key={friend.id}>
      {friend.isOnline === true ? (
        <IsOnline></IsOnline>
      ) : (
        <IsOffline></IsOffline>
      )}
      <FriendImage src={friend.avatar} alt="User avatar" width="48" />
      <FriendName>{friend.name}</FriendName>
    </ListItem>
  );
};
