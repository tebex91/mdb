import React, { Component } from 'react';
import ListItem from '../list-item';

import './item-list.sass';

export default class ItemList extends Component {
    render() {
        return (
            <div className="item-list">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        )
    }
}