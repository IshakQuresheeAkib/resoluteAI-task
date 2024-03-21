import useAuth from "../../hook/useAuth";

const Navbar = () => {

    const {logOut} = useAuth();

    const signOut = () => {
        logOut()
        .then(() => alert('log out successful!'))
        .catch(err=>console.log(err))
    }

    
    return (
        <div className='w-full h-20 shadow-lg border flex justify-center'>
              <button className='btn-accent btn mt-3' onClick={()=>signOut()}>Log out</button>  
        </div>
    );
}
export default Navbar;