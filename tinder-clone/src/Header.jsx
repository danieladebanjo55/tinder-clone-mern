import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
    return (
        <>
            <div className='header'>
                <IconButton>
                    <PersonIcon fontSize='large' className='header__icon'/>
                </IconButton>

                <img className='header__logo' src='https://www.vhv.rs/file/max/14/143794_tinder-icon-png.png' alt='header__logo' />

                <IconButton>
                    <ForumIcon fontSize='large'/>
                </IconButton>
            </div>
        </>
    )
}

export default Header