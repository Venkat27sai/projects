// import React from 'react'
// import {user } from './CompA.jsx'
// import { id } from './CompA.jsx'

// const CompC = () => {
//   return (
//     <div>
//         <user.Consumer>
//             {
//                 (name) => {
//                     return(
//                        <>
//                        <id.Consumer>
//                         {
//                             (num) => {
//                                 return(
//                                     <h1 style={{color: "violet",
//                                          textAlign: 'center',
//                                           marginTop: '400px' }}>My name is {name}  and<br/>Id is {num}</h1>
//                                 )

//                             }
//                         }
//                        </id.Consumer>
//                        </>
                        
//                     )
//                 }
//             }
//         </user.Consumer>
            
//     </div>
//   )
// }

// export default CompC


import React, { useContext } from 'react'
import { username } from './CompA'
import { id } from './CompA'

const CompC = () => {
    let user  = useContext(username)
    let num = useContext(id)
  return (
    <div>
        <h1>{user} {num}</h1>
       
    </div>
  )
}

export default CompC