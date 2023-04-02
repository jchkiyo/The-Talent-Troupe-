import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'



export default function PrivateRoutes() {
    const  userid = sessionStorage.getItem("accessToken") == null ? false : true;
    console.log(userid);

    
    return (
        <>
            {userid ? <Outlet  /> : <Navigate to="/login" />};
        </>

    )

}