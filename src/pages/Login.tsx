import { useQuery, useMutation } from "@tanstack/react-query";
import {  loginUser, registerUser} from "../services/AuthService";
import {useForm} from "react-hook-form";
import { CreateUserInput, UserLoginSchema } from "../models/user.schema";
import z from 'zod'
import { createContext, useContext } from "react";
import { getCookie } from "../utils/cookieTools";
import '../style/login.scss';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
export function Login(){
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<CreateUserInput>();
    const {mutate, data, error, isLoading} = useMutation(["login"],(user: CreateUserInput) => loginUser(user), {
        onSettled: async ()=>{
            console.warn("successfully added cookie: ", JSON.stringify(decodeURIComponent(document.cookie)));
            let decoded = decodeURIComponent(document.cookie);
            let spliced = decoded.split("user=");
            let temp = JSON.stringify(spliced.at(1));
            let user = JSON.parse(JSON.parse(temp));
            console.log(user);
        },
        onSuccess: () =>{
            navigate('/');
        },
    })  
    function onSubmit(values: CreateUserInput){
        mutate(values);
    }
    return (
        <>
            <div className="center">
                <Navbar/>
                <div className="loginContainer">
                    <form onSubmit={handleSubmit(onSubmit)} className='loginForm'>
                        <h1>Login</h1>
                        <input type="text" placeholder="username" id="" {...register('username')}/>
                        <input type="text" placeholder="password" id="" {...register('password')}/>
                        <span>Don't have an account? <a href="/register">register</a>!</span>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;
