import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { getUserFromCookie } from "../utils/cookieTools";


export function Home(){
    const user = getUserFromCookie();
    console.log(user);
    return (
        <>
            <Navbar/>
            <div>Home Works</div>
            <Products/>
            {/* <Footer/> */}
        </>
    )
}

export default Home;