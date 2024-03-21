import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";


const UserList = () => {

    const [userList,setUserList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/users')
    .then(data=>{
        // console.log(data?.data);
        setUserList(data?.data)
    })
    },[userList])


    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5000/users/${id}`)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>console.log(err))
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