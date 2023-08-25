import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from 'userInfo/user.json';
import data from "userInfo/data.json";
import friends from "userInfo/friends.json"
import transactions from "userInfo/transactions.json"


export const App = () => {
 
  return (
    <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title='Your Statistics' stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </>
  );
};
