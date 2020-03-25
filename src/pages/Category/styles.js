import styled from 'styled-components';
import CircularProgress from "@material-ui/core/CircularProgress";

export const Container = styled.div`
    margin: 30px auto;
    background: white;
    border-radius: 10px;
    padding: 10px;
`
export const Loader = styled(CircularProgress)`
    margin: 0 auto !important;
    display: block !important ;
    color: #f15a24 !important;
`
export const Icon = styled.img`
    display: block;
    margin: 0 auto;
`

export const Text = styled.p`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
`

export const Title = styled.h2`
    font-size: 24px;
    color: white;
    text-align: center;
    margin: 30px 0 0 0;
`
export const Error = styled.h2`
    font-size: 24px;
    color: red;
    text-align: center;
    margin: 30px 0 0 0;
`

export const Button = styled.a`
    width: 100%;
    padding: 15px;
    background: #f15a24;
    text-align: center;
    border-radius: 10px;
    font-weight: bold;
    border: 5px solid #c1481c;
    color: white;
    margin: 0 auto;
    display: block;
    cursor: pointer;
`
