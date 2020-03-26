import React, { useEffect, useState } from 'react';
import { Container, List } from './styles';
import { Title } from '../../components/Title/styles'
import { useSelector, useDispatch } from 'react-redux';
import * as ListActions from "../../store/list/actions";
import { Loader } from '../../components/Loader/styles';
import ListItem from '../../components/ListItem';

export default function Home() {
    const list = useSelector(state => state.listItems);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        handleData();
    }, [list]);

    function handleData() {
        if (list.length > 0) {
            setLoading(false);
            return
        };
        dispatch(ListActions.updateListRequest());
    };

    return (
        <Container>
            <Title>Hey Pal, this is a list with my best jokes, I hope you enjoy</Title>
            {loading ? <Loader size={50} /> : (
                <List>
                    {list && list.map((category, index) => (
                        <ListItem data={category} key={index} />
                    ))}
                </List>
            )}
        </Container>
    );
}
