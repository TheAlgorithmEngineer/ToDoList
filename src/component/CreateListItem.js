import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CreateDialog from './CreateDialog.js';

export default function CreateListItem(props) {
    let newItemState = useState('');
    let openState = useState(false);
    let [isOpen, setIsOpen] = openState;
    let CreateNewItem = props.CreateNewItem;

    return (
        <>
            <Button variant="contained" 
                    color="primary" 
                    onClick={() => {
                        setIsOpen(true);
                    }}>
                Create
                </Button>
                <CreateDialog openState={openState} newItemState={newItemState} CreateNewItem={CreateNewItem}/>
        </>
    )
}