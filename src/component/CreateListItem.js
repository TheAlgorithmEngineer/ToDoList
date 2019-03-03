import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function CreateListItem(props) {
    let [newItem, updateNewItem] = useState('');
    const handleChange = event => {
        updateNewItem(event.target.value);
    }
    return (
        <>
            <Card>
                <TextField id="newItem"
                    label="New Item"
                    value = {newItem}
                    onChange={handleChange}/>
                <Button variant="contained" color="primary" onClick={() => {
                    props.CreateNewItem(newItem);
                    updateNewItem('');
                }}>
                    Create
                </Button>
            </Card>
        </>
    )
}