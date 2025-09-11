"use client";

import { useSearchParams } from "next/navigation";
import { resolve } from "path";
import { useEffect, useState } from "react";


const FetchDataServer = () => {

    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

   

    if(!userName || userName==="") {
        
    return (
        <div className="flex h-screen w-full justify-center items-center">
        <h1 className="text-lg font-semibold text-gray-800">
            Please add a username in the URL
        </h1>
        </div>
    );
    }

    const [gender,setGender] = useState("");

    useEffect(() =>{


        const gender = async() =>{
            const res = await fetch(`https://api.genderize.io/?name=${userName}`);
            const userData = await res.json();
            console.log(userData)
            setGender(userData.gender);

        }
        gender();
    },[]);

    



    return (
        <>
        <h1>name: {userName}</h1>
        <h1>gender: {gender}</h1>
        </>
        
    )

};

export default FetchDataServer;