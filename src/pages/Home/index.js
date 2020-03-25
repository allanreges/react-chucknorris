import React, { useEffect } from 'react';
import { Title, Container, List } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api';
import * as ListActions from "../../store/list/actions";
import ListItem from '../../components/ListItem'

export default function Home() {

    useEffect(() => {
        handleData()
    }, [])

    const listItems = useSelector(state => state.list.flat(1))

    const dispatch = useDispatch()

    async function handleData() {
        if (listItems.length > 0) {
            return
        }
        const response = await api.get('categories')
        if (response.status === 200) {
            dispatch(ListActions.updateList(response.data))
        }
    }


    return (
        <Container>
            <Title>Hey Pal, this is a list with my best jokes, I hope you enjoy</Title>
            <List>
                {listItems && listItems.map((category, index) => (
                    <ListItem data={category} key={index} />
                ))}
            </List>
        </Container>
    );
}
