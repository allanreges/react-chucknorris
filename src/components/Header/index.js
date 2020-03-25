import React from 'react';
import { Logo } from './styles';
import { Link } from 'react-router-dom'
import Chuck from '../../files/Images/chucknorris_logo_coloured_small@2x.png'

export default function Header() {
    return (
        <Link to="/react-chucknorris"><Logo src={Chuck} /></Link>
    );
}
