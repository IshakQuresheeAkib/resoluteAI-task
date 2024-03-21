import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const UserList = () => {

    const [userList,setUserList] = useState([])

    useEffect(()=>{
        axios.get('https://resoluteai-server.vercel.app/users')
    .then(data=>{
        // console.log(data?.data);
        setUserList(data?.data)
    })
    },[userList])


    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor:'#d33',
            cancelButtonColor: "green",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://resoluteai-server.vercel.app/users/${id}`)
                .then(res=>{
                    console.log(res);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                })
                .catch(err=>console.log(err))              
            }
          });

        
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-1/2 mx-auto mt-20 bg-base-300 p-5 flex flex-col items-center gap-10 mb-20">
                <h1 className="text-2xl font-bold">Users List</h1>
                <div>
                    <ul>
                        {
                            userList?.length ? userList.map(user=>{
                                return(
                                    <p className="flex mt-4" key={user._id}>
                                        <li className=" list-inside list-decimal w-64">{user.email}</li>
                                        <button onClick={()=>handleDelete(user._id)} className="btn btn-circle btn-xs text-white rounded-full ml-3  btn-accent">X</button>
                                    </p>
                                )
                            }) : ''
                        }
                    </ul>
    
            </div>
        </div>
        </div>
    );
}
export default UserList;