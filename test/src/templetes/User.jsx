import React from 'react'
// import {UserLogin, UserRegister, UserRemove, UserUpdate} from '../components/user'
import {UserMenu as Menu} from '../components'
import { UserLogin } from '../container/user'
const User = ({children}) => {
    
    return<>
    <h1>User</h1>
    <Menu/>
    {children}
    </>
}

export default User
