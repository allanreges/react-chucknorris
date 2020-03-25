import React from 'react';
import { Logo } from './styles';
import { Link } from 'react-router-dom'
import Chuck from '../../Files/Images/chucknorris_logo_coloured_small@2x.png'

export default function Header() {
    return (
        <Link to="/"><Logo src={Chuck} /></Link>
    );
}
