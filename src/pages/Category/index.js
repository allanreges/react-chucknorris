import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Loader } from '../../components/Loader/styles';
import { Title } from '../../components/Title/styles';
import { Button } from '../../components/Button/styles';
import { Container, Icon, Text } from './styles';

export default function Category() {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setCategory(localStorage.getItem("category"));
        handleData();
    }, [category]);

    async function handleData() {
        setLoading(true);
        if (category) {
            const response = await api.get(`random?category=${category}`);
            if (response.status === 200) {
                setData(response.data);
            }
            setLoading(false);
        };
    };

    return (
        <>
            <Title>This is my nice repertory about {category} jokes</Title>
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
