import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ selectedFriend, handleSplitBill }) {
    const [bill, setBill] = useState('');
    const [paidByUser, setPaidByUser] = useState('');
    const paidByFriend = bill ? bill - paidByUser : '';
    const [whoIsPaing, setWhoIsPaing] = useState('user');

    function handleSubmit(e) {
        e.preventDefault();
        if (!bill || !paidByUser) return null;

        handleSplitBill(whoIsPaing === 'user' ? paidByFriend : -paidByUser);
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input type="text" value={bill} onChange={e => setBill(Number(e.target.value))} />

            <label>🧍‍♂️ Your expense</label>
            <input type="text" value={paidByUser} onChange={e => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />

            <label>👫 {selectedFriend.name}'s expense</label>
            <input type="text" disabled value={paidByFriend} />

            <label>🤑 Who is paying the bill?</label>
            <select value={whoIsPaing} onChange={e => setWhoIsPaing(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button onClick={handleSubmit}>Split bill</Button>
        </form>
    );
}
