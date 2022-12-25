import { useMutation } from "@tanstack/react-query";
import Navbar from "../components/Navbar";
import { UserRegisterInput, UserRegisterSchema } from "../models/user.schema";
import { registerUser } from "../services/AuthService";
import { useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import '../style/register.scss';

export function Register(){
    const {register, handleSubmit} = useForm<UserRegisterInput>();
    const navigate = useNavigate();
    const {mutate, error} = useMutation(["register"], (user: UserRegisterInput) => registerUser(user), {
        onSuccess: () =>{
            navigate("/");
        }
    })

    function onSubmit(values: UserRegisterInput){
        mutate(values);
    }
    return (
        <>
            <div className="center">
                <Navbar/>
                <div className="registerContainer">
                <form onSubmit={handleSubmit(onSubmit)} className='registerForm'>
                        <h1>Register</h1>
                        <input type="text" placeholder="username" id="" {...register('username')}/>
                        <input type="text" placeholder="email" id="" {...register('email')}/>
                        <input type="text" placeholder="password" id="" {...register('password')}/>
                        <span>Already have an account? <a href="/login">login</a>!</span>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Register;