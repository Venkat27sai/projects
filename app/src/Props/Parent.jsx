// // import React, { Component } from 'react'
// // import Child from './Child'
// // class Parent extends Component {
// //   obj= {
         
// //     username : "Venkat",
// //     roll :     "427",
// //     department : "CSE",
// //     age : "19",
// //     clg : "Malla Reddy University",
// //     dob : "07/06/2004",
// //     section : "Group-5",
// //     place : "Khammam"
    
  
// //   }
// //   render() {
// //     return (
// //       <>
// //       <Child bio = {this.obj.bio}
// //       name = {this.obj.username} 
// //       age = {this.obj.age} 
// //       department = {this.obj.department} 
// //       roll = {this.obj.roll} 
// //       clg = {this.obj.clg}
// //       dob = {this.obj.dob}
// //       section = {this.obj.section}
// //       place = {this.obj.place}/>
// //       </>
// //     )
// //   }
// // }

// // export default Parent;






// import React from 'react'
// import Child from './Child'
// const Parent = () => {
//   let obj1 = {
//     name : "venkat",
//     id : "1",
//     designation : "tester"
//   }
//   return (
//     <div>
//       {/* <Child name = "Venkat" 
//       age = "19" section ="Group-5"
//        clg="Malla Reddy University"
//         roll = "2211CS010427"
//          department = "CSE"/> */}
//          {/* <Child id = {10}/> */}
//          {/* <Child arr = {[10 , 20 , 30 , 40]}/> */}
//          <Child obj = { obj1} />

//     </div>
//   )
// }

// export default Parent;





import React from 'react'
import Child from './Child'
const Parent = () => {
  let demo  = () =>{
    window.alert("iam arrow function")

  }
  return (
    <>
    <Child fun = {demo}/>
    </>
  )
}

export default Parent