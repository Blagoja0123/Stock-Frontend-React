import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { getUserFromCookie } from "../utils/cookieTools";
import Navbar from "../components/Navbar";


export function User(){

    const user = getUserFromCookie();
    console.log(user);
    const navigate = useNavigate();

    useEffect(() => {
      if(!user){
        navigate('/register');
      }
    }, [])
    

    return (
        <>
            <Navbar/>
            <p>{user?.username}</p>
        </>
    )
}

export default User;