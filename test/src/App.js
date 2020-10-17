import React from 'react'
import {Nav} from './components'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import {Home,Item, User,Board} from './templetes'
import {UserLogin,UserRegister,UserRemove,UserUpdate,UserDetail} from './container/user'
const App = () =><>
<BrowserRouter>
  <Nav/>
    <Switch>
        <Route path="/home" component={Home}/>
        <Redirect exact from={'/'} to ={'/home'}/>
        <Route path="/signup-form" component={UserRegister}/>
        <Route path="/sigin-form" component={UserLogin}/>
        <Route path="/mypage" component={UserDetail}/>
        <Route path="/modifying-user-info" component={UserUpdate}/>
        <Route path="/membership-withrawal" component={UserRemove}/>
        
    </Switch>
</BrowserRouter>
</>

export default App;
