import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ onShowAddFriend, onAddFriend }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48?u=118836');

    function handleForm(e) {
        e.preventDefault();
        if (!name || !image) return;

        const id = crypto.randomUUID();
        const newFriend = { name, image: `${image}?=${id}`, balance: 0, id };
        onAddFriend(newFriend);
        setName('');
        setImage('https://i.pravatar.cc/48?u=118836');
        onShowAddFriend(show => !show);
    }

    return (
        <div>
            <form className="form-add-friend" onSubmit={e => handleForm(e)}>
                <label>👫 Friend name</label>
                <input value={name} type="text" onChange={e => setName(e.target.value)} />

                <label>🌄 Image URL</label>
                <input value={image} type="text" onChange={e => setImage(e.target.value)} />

                <Button onClick={e => handleForm(e)}>Add friend</Button>
            </form>
        </div>
    );
}
