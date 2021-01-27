//done-ish, implement sidebar and search

import React, { useContext, useState } from 'react'
import { Input, Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { AuthContext } from '../context/auth';
import SearchForm from './SearchForm'
import SideBar from './SideBar'      // this is to maybe have the info icon be the button to display the sidebar later

function MenuBar() {
    const { user, logout } = useContext(AuthContext);
    const pathname = window.location.pathname;

    let path = pathname === '/' ? 'home' : pathname.substr(1);
    const [activeItem, setActiveItem] = useState(path);

    const handleItemClick = (e, { name }) => setActiveItem(name);

    const menuBar = (
        <Menu pointing secondary size="massive">
            <Menu.Item><SideBar /></Menu.Item>
            <Menu.Item icon="list"/>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
                as={Link}
                to="/"
            />
            <Menu.Menu position='right'>
                <Menu.Item>
                    <SearchForm />
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/login"
                />
                <Menu.Item
                    name='register'
                    active={activeItem === 'register'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/register"
                />
            </Menu.Menu>
        </Menu>
    )
    return menuBar;
}
export default MenuBar;
