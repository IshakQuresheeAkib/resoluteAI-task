import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";


const useAuth = () => {
    
    return useContext(AuthContext);
}
export default useAuth;