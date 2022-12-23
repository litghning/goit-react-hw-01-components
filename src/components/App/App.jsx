import { Profile } from "../Profile/profile";
import user from '../user.json';
import {Container} from './App.styled';
import { Statistics } from "components/Statistics/Statistics";
import uploadsData from '../data.json';
import friends from '../friends.json';
import { FriendsList } from '../FriendsList/FriendsList';
import transactions from '../transactions.json';
import {TransactionHistory} from '../TransactionHistory/TransactionHistory'


export const App = () => {
  return (
    <Container>
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={uploadsData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
   
  );
};
