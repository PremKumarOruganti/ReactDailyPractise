/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
//import React from 'react'
import { useContext } from 'react'
import { UserDetailsContext } from '../Context/userContext'



const GettingContextValue = () => {
    const data: any = useContext(UserDetailsContext);
    console.log('data :', data);

    return (
        <div>{data}</div>
    )
}

export default GettingContextValue