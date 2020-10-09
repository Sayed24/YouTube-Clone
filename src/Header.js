import React, { useState } from 'react';
import './Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className='header'>
            <div className="header__left">
                <MenuSharpIcon />
                <Link to="/">
                    <img className="header__logo" 
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                        alt="" 
                    />
                </Link>
            </div>

            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar 
                    alt="My Pic"
                    src="https://avatars0.githubusercontent.com/u/56288293?s=400&u=2022febaa8bf8f24e3401f5300cc2d062875884e&v=4"
                />
            </div>
        </div>
    );
}

export default Header;
