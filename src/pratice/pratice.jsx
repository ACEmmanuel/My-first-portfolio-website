import React, { useState, useEffect } from "react";
import { data, moreData } from "./data";
import './pratice.css'

const url = 'https://api.github.com/users/QuincyLarson';

 const Pratice =()=>{
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const fetchUser = async() => {
            try {
                const response = await fetch(url);
                const profile = await response.json();
                setUser(profile)
                console.log(profile);
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false)
        }
        fetchUser()
    }, [])

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>There was an error...</h2>
    }

    return(
        <>
        <div>
            <img src={user.avatar_url} style={{borderRadius:'20px', width:'200px', height:'200px'}}/>
            <h2>{user.name}</h2>
            <p>Works At {user.company}</p>
            <p>Teacher at {user.bio}</p>
        </div>
            
        </>
    )
}

export default Pratice


{/* <button type="button" onClick={()=>showMike()} style={{backgroundColor:'steelBlue', outline:'none', width:'6rem', height:'2.2rem', border:'none', color:'white', fontWeight:'bold', borderRadius:'0.3rem'}}>Show Mike</button> */}