import React from 'react'
import {Link} from 'react-router-dom'
import {Home,Item, User,Board} from '../templetes'
const Nav = () => {
return<>
<nav>
    <ol>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/user' >User</Link></li>
        <li><Link to='/item' >Item</Link></li>
        <li><Link to='/board' >Board</Link></li>
    </ol>
</nav>
</>}

export default Nav
