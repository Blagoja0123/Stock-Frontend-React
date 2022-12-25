import { CreateUserInput, User } from "../models/user.schema";
import axios from 'axios';
import { baseUrl } from "../utils/constants";
import { z } from "zod";
import { createContext, ReactNode, useContext, useState } from "react";

async function registerUser(credentials: any){
    try {
        const {data} = await axios.post(`${baseUrl}/auth/register`, credentials);
        console.warn('successfully registered new user: ', credentials);
        return data.json;
    } catch (error) {
        console.error('Something went wrong', error);
        return null;
    }   
}



async function loginUser(credentials: CreateUserInput){
    try {
        const {data} = await axios.post(`${baseUrl}/auth/login`, credentials);
        document.cookie = `user=${JSON.stringify(data)}`;
        return data;
    } catch (error) {
        console.error('Something went wrong', error);
        return null;
    }
}



export {registerUser, loginUser};