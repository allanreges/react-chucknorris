import React, { memo } from 'react';
import { Item, LinkTo } from './styles';

function ListItem({ data }) {
    function handleClick() {
        localStorage.setItem("category", data)
    }

    return (
        <LinkTo to="/react-chucknorris/category"><Item onClick={handleClick}>{data}</Item></LinkTo>
    );
}

export default memo(ListItem)
