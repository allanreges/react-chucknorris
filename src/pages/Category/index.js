import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { Container, Icon, Text, Button, Loader, Title, Error } from './styles';

export default function Category() {
    const [data, setData] = useState([])
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(false)
    const [dataError, setDataError] = useState(false)

    useEffect(() => {
        setCategory(localStorage.getItem("category"))
        handleData()
    }, [category])

    async function handleData() {
        setLoading(true)
        if (category) {
            const response = await api.get(`random?category=${category}`)
            if (response.status === 200) {
                setData(response.data)
                setLoading(false)
            } else {
                setDataError(true)
            }
        }
    }

    return (
        <>
            <Title>This is my nice repertory about {category} jokes</Title>
            {dataError && (
                <Error>Something went wrong inside my of box of jokes, please try again</Error>
            )}
            <Container>
                {loading ? <Loader size={30} /> : (
                    <>
                        <Icon src={data.icon_url} />
                        <Text>{data.value}</Text>
                    </>
                )}
            </Container>
            <Button onClick={handleData}>Try another joke!</Button>
        </>
    );
}
