import Login from './Components/Login/Login.jsx';
import UserList from './Components/UserList/UserList.jsx';
import useAuth from './hook/useAuth.jsx'

function App() {

  const {user} = useAuth();
  console.log(user);

  return (
      <div>
        {user ? <UserList/> : <Login/>}
      </div>
  )
}

export default App
