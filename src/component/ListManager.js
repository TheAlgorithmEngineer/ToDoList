import React, {useState} from 'react';
import List from './List.js';
import CreateListItem from './CreateListItem.js';

export default function ListManager(props) {

    let [listItems, updateListItems] = useState(['test', 'exam']);
    const CreateNewItems = newItem => {
        updateListItems([...listItems, newItem]);
    }
    return (
        <>
            <List listItems={listItems} />
            <CreateListItem  CreateNewItem={CreateNewItems}/>
        </>
    )
}