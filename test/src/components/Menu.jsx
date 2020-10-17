import React from 'react'
import {Link} from 'react-router-dom'
import {Home,Item, User,Board} from '../templetes'
export const UserMenu = () => {
return<>
<nav>
    <ol>
        <li><Link to='/signup-form' >Signup</Link></li>
        <li><Link to='/signin-form' >Signin</Link></li>
        <li><Link to='/mypage' >Mypage</Link></li>
        <li><Link to='/modifying-user-info' >Modifying-user-info</Link></li>
    </ol>
</nav></>
}
// const BoardMenu = () => {
// return
// <nav>
//     <ol>
//         <li><Link to='/' >Home</Link></li>
//         <li><Link to='/user' >User</Link></li>
//         <li><Link to='/item' >Item</Link></li>
//         <li><Link to='/board' >Board</Link></li>
//     </ol>
// </nav>
// }
// const ItemMenu = () => {
// return
// <nav>
//     <ol>
//         <li><Link to='/' >Home</Link></li>
//         <li><Link to='/user' >User</Link></li>
//         <li><Link to='/item' >Item</Link></li>
//         <li><Link to='/board' >Board</Link></li>
//     </ol>
// </nav>
// }

