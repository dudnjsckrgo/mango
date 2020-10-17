import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {User} from '../../templetes'
const UserLogin = () =>{
    const [id,setId] =useState('')
    const [pw,setPw] =useState('')
    const userData={
        id, pw 
    }
    const login = () => { 
        alert(`로그인 버튼 클릭!${id}, ${pw}`)
        axios.post('',{id,pw})
             .then(res =>{alert('로그인 성공')})
             .catch(error =>
                {alert('Fail')}

             )}
    const cancel =( ) =>{alert(`캔슬 버튼 클릭!${id},${pw} `)}

return<><User>
<table>
    <tr>
        <td>ID</td>
        <td><input type='text' onChange={e=>setId(e.target.value)}/></td>
        
    </tr>
    <tr>
        <td>PW</td>
        <td><input type='text' onChange={e=>setPw(e.target.value)}/></td>
    </tr>
    <tr>
        <td colSpan='2'>
            <input type="button" value='Login' onClick={login}/>
            <input type="button" value='Cancel' onClick={cancel}/>
        </td>
        
    </tr>
</table>
</User></>
}
export default UserLogin
