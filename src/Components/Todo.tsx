/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const Todo = () => {
    interface listType {
        text: string;
        id: string;
    }

    const [list, setList] = useState<listType[]>([]);
    const [message, setMessage] = useState({ text: "", id: "" });

    const [editingItem, setEditingItem] = useState({
        id: '',
        isEditing: false
    })

    const handleChange = (e: any) => {
        setMessage({
            ...message,
            text: e.target.value,
        });
    };

    const handleAdd = () => {
        const newTodo = {
            text: message.text,
            id: new Date().getTime().toString(),
        };
        setList([...list, newTodo]);

        setMessage({
            text: "", id: ""
        })
    };

    const handleDelete = (id: any) => {
        const newList = list.filter((eachItem: any) => {
            return eachItem.id !== id
        })
        setList(newList)
    }

    const changeEditState = (id: any) => {
        setEditingItem({
            ...editingItem,
            id: id,
            isEditing: true
        })


        const editableItem = list.find(eachItem => eachItem.id === id);
        if (editableItem) {
            setMessage({
                ...message,
                text: editableItem.text,
                id: editableItem.id
            });
        }

    }
    const handleUpdate = () => {
        setList(prevList => {
            return prevList.map(eachItem => {
                if (eachItem.id === editingItem.id) {
                    return {
                        text: message.text,
                        id: message.id
                    };
                } else {
                    return eachItem; // Return unchanged item
                }
            });
        });
        setMessage({ text: "", id: "" }); // Clear input after update
        setEditingItem({ id: '', isEditing: false }); // Reset editing state
    };



    return (
        <>
            <h3>Todo</h3>
            <form>
                <input
                    type="text"
                    placeholder="Enter Some Text"
                    id="message"
                    name="message"
                    value={message.text}
                    onChange={(e) => handleChange(e)}
                />
                {
                    editingItem.isEditing ? (
                        <button onClick={handleUpdate} type="button">
                            Edit
                        </button>
                    ) : (
                        <button onClick={handleAdd} type="button">
                            Add
                        </button>
                    )
                }
                {/* <button onClick={handleAdd} type="button">
                    Add
                </button> */}
            </form>
            <hr />
            {list.length == 0 && <h3>There is no items in the list</h3>}
            <ul>
                {list.map((eachItem) => (
                    <li key={eachItem.id}>
                        Text: {eachItem.text}
                        &nbsp;
                        Id: {eachItem.id}
                        &nbsp;
                        <button onClick={() => changeEditState(eachItem.id)}>Edit</button>
                        <button onClick={() => handleDelete(eachItem.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Todo;
