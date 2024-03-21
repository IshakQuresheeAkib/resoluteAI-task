import Login from './Components/Login/Login.jsx';
import UserList from './Components/UserList/UserList.jsx';
import useAuth from './hook/useAuth.jsx'

function App() {

  const {user,loading} = useAuth();
  console.log(user,loading);

  return (
      <div>
        {loading ? <div className='flex justify-center items-center h-screen'>
          <span className="loading loading-bars loading-lg text-accent"></span>
          </div> :
           user ? <UserList/> : <Login/>}
      </div>
  )
}

export default App
