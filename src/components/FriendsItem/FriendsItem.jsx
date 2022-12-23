import PropTypes from 'prop-types';
import { Avatar, Card, IsOnline, Name } from './FriendsItem.styled';

export const FriendItem = ({name, status, avatar}) => {
    return <Card>
  
      <IsOnline status={status}></IsOnline>
      <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
      <Name>{name}</Name>
    </Card>
  }
  
  FriendItem.propTypes = {
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }