/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react'


// export const UserDetailsContext = React.createContext('');

// export const UserContextProvider = ({ children }: any) => {
//     return (
//         <UserDetailsContext.Provider value={"Hello Guys"}>{children}</UserDetailsContext.Provider>
//     )
// }

import React from 'react'

export const UserDetailsContext = React.createContext('');

export const UserContextProvider = ({ childern }: any) => {
    return (
        <UserDetailsContext.Provider value={"Hello"}>{childern}</UserDetailsContext.Provider>
    )
}