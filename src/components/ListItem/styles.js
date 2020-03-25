import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
    width: 300px;
    padding: 20px 0;
    margin: 8px 0;
    font-size: 18px;
    color: white;
    background: #f15a24;
    text-align: center;
    border-radius: 10px;
    font-weight: bold;
    border: 5px solid #c1481c;
    text-transform: uppercase;

    @media (min-width: 1024px) {
        width: 500px;
    }
`

export const LinkTo = styled(Link)`
    text-decoration: none;
`