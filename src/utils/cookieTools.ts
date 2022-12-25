import { User } from "../models/user.schema";

export function getCookie(){
    let decodedCookie = decodeURIComponent(document.cookie);
    return decodedCookie;
}

export function getUserFromCookie(){
    let decoded = decodeURIComponent(document.cookie);
    let spliced = decoded.split("user=");
    let user: User = null;
    if(spliced.at(1)){
        let temp = JSON.stringify(spliced.at(1));
        
        user = JSON.parse(JSON.parse(temp));
        
    }  
    return user;
}