import Navbar from "../Navbar/Navbar";

const UserList = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-1/2 mx-auto mt-20 bg-base-300 p-5 flex flex-col items-center gap-10 h-[60vh]">
                <h1 className="text-2xl font-bold">Users List</h1>
                <div>
                    <ul>
                        <li className=" list-inside list-decimal">akibqureshee11@gmail.com
                        <button className="btn btn-xs rounded-full ml-3 btn-accent text-white/90">X</button>
                        </li>
                    </ul>
    
            </div>
        </div>
        </div>
    );
}
export default UserList;