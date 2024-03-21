import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";

const Navbar = () => {

    const {logOut} = useAuth();

    const signOut = () => {
        logOut()
        
        .then(() => {
            Swal.fire({
                title: "Logged out successfully!",
                icon: "success"
              });
        })
        .catch(err=>console.log(err))
    }

    
    return (
        <div className='w-full h-20 shadow-lg border flex justify-center'>
              <button className='btn-accent btn mt-3' onClick={()=>signOut()}>Log out</button>  
        </div>
    );
}
export default Navbar;