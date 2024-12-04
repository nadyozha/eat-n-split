import { Friend } from "./Friend";

export function FriendsList({ friendList, onSelection, selectedFriend }) {
    return <ul>
        {friendList.map((item) => <Friend friend={item} key={item.id} onSelection={onSelection} selectedFriend={selectedFriend} />)}
    </ul>;

}
