import { useState } from "react";
import { Button } from "./Button";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";
import { FriendsList } from "./FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Vityundra",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 0,
  },
  {
    id: 933372,
    name: "Igor Kovalchuk",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: -3800,
  },
  {
    id: 499476,
    name: "Viktor Ivanovich",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 300,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendList, setFriendList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);


  function handleShowAddFriend() {
    setShowAddFriend(show => !show);
  }

  function addFriends(newFriend) {
    setFriendList((friendList) => [...friendList, newFriend]);
  }

  function handleSelection(friend) {
    setSelectedFriend(selected => selected?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriendList(friendList => friendList.map(friend => (
      friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend
    )));
    setSelectedFriend(null);
  }

  return <div>
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendList={friendList}
          onSelection={handleSelection}
          selectedFriend={selectedFriend} />

        {showAddFriend && <FormAddFriend
          onAddFriend={addFriends}
          onShowAddFriend={setShowAddFriend} />}

        <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} handleSplitBill={handleSplitBill} />}
    </div>
  </div>
}
