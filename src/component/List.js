import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';

const listStyle = {
    width: 250,
    height: 50,
    margin: 10
  };

export default function List(props) {
    let {listItems} = props;

    const terms = listItems.map((term, i) =>
        <Card key={i} style={listStyle}>{term}</Card> )
    return (
        <div>{terms}</div>
    )
}