import React, { useContext, useState } from 'react'
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { AuthContext } from '../context/auth';

function MenuBar() {
    const { user, logout } = useContext(AuthContext);
    const pathname = window.location.pathname;

    let path = pathname === '/' ? 'home' : pathname.substr(1);
    const [activeItem, setActiveItem] = useState(path);

    const handleItemClick = (e, { name }) => setActiveItem(name);

    const menuBar = user ? (
        <Menu pointing secondary>
            <Menu.Item
                name={user.username}
                active
                as={Link}
                to="/"
            />
            <Menu.Menu position='right'>
                <Menu.Item
                    name='logout '
                    onClick={logout}
                />
            </Menu.Menu>
        </Menu>
    ) : (
            <Menu pointing secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/"
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='register'
                        active={activeItem === 'register'}
                        onClick={handleItemClick}
                        as={Link}
                        to="/register"
                    />
                    <Menu.Item
                        name='login'
                        active={activeItem === 'login'}
                        onClick={handleItemClick}
                        as={Link}
                        to="/login"
                    />
                </Menu.Menu>
            </Menu>
        )
    return menuBar;
}
export default MenuBar;

/* thats
git add.
git commit -m "working menubar" 
he said put it in another branch i think? yeah
git checkout -b side
git remote add origin https://github.com/Jamesmed1999/TTP-Capstone.git
git push -u origin main
i think thats it?
k thanks, im not goot at git
its cool
*/