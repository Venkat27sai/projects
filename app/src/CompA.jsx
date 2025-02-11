// import React from 'react'
// import CompB from './CompB'

//  export const user = React.createContext()
//  export const id = React.createContext()


// const CompA = () => {
//   return (
//     <div>
//         <user.Provider value={"Venkat"}>
//         <id.Provider value={427}>
//             <CompB/>

//         </id.Provider>
//         </user.Provider>
        
//     </div>
//   )
// }

// export default CompA;



import React from 'react'
import CompB from './CompB' 

export let username = React.createContext() 
export let id = React.createContext()

const CompA = () => {
  return (
    <div>
        <username.Provider value={"Pavan"}>
            <id.Provider value={44}>
                <CompB/>
            </id.Provider>
        
        </username.Provider>
        
    </div>
  )
}

export default CompA