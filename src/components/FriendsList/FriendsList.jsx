import PropTypes, { arrayOf } from 'prop-types';
import { FriendItem } from '../FriendsItem/FriendsItem';
import {FrdList} from './FrendsList.styled';


export const FriendsList = ({friends}) => {
  return (
  <FrdList>
    {friends.map(({id, avatar, name, isOnline}) => (
      <FriendItem name={name} avatar={avatar} status={isOnline} key={id}
      />
      ))
    }
  </FrdList>
  );
};

FriendsList.propTypes = {
  friends: arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  )
}