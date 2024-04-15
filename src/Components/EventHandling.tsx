/* eslint-disable @typescript-eslint/no-explicit-any */
//import React from 'react'

const EventHandling = () => {

    //// function with out perameters ////

    // const handleClick = () => {
    //     console.log('Clicked')
    // }
    // return (
    //     <>
    //         <button onClick={handleClick}>
    //             Click Here
    //         </button>
    //     </>
    // )


    //// for function with perameters ////
    const handleClick = (e: any, Name: any) => {
        console.log('Clicked', e, Name)
    }
    return (
        <>
            <button onClick={(e) => handleClick(e, 'Prem')}>
                Click Here
            </button>
        </>
    )
}

export default EventHandling