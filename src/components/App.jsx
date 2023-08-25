import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from 'userInfo/user';
import data from "userInfo/data";
import friends from "userInfo/friends"
import transactions from "userInfo/transactions"


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
