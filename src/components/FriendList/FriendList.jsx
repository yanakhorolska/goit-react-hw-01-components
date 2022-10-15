import PropTypes from 'prop-types';
import { IsOnline, IsOffline, ListItem, FriendImage, FriendName, FriendsList } from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map((friend) => (
                <ListItem key={friend.id}>
                    {friend.isOnline === true ? <IsOnline></IsOnline> : <IsOffline></IsOffline>}
                    <FriendImage src={friend.avatar} alt="User avatar" width="48" />
                    <FriendName>{friend.name}</FriendName>
                </ListItem>
            )
            )}
        </FriendsList>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
    friend: PropTypes.objectOf(PropTypes.shape(
        {
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }
    )),
}

