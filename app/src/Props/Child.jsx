// // import React, { Component } from 'react'
// // class Child extends Component {
// //   render() {
// //     return (
      
// //       <>
// //       <h1 style={{ textAlign: 'center', color: 'blue'}}>BIO DATA</h1>
// //       <h2>Name: {this.props.name}</h2>
// //       <h2>Age : {this.props.age}</h2>
// //       <h2>Department:{this.props.department}</h2>
// //       <h2>Roll :{this.props.roll}</h2>
// //       <h2>College :{this.props.clg}</h2>
// //       <h2>Date Of Birth :{this.props.dob}</h2>
// //       <h2>Section:{this.props.section}</h2>
// //       <h2>Place :{this.props.place}</h2>
      
// //       </>
      
// //     )
// //   }
// // }

// // export default Child;



// import React from 'react'
// const Child = (props) => {
//   console.log(props);

//   let {name , id ,designation} = props.obj
//   return (
//     <div>
//     {/* <h2 style={{ textAlign: 'center', color: 'blue'}}>BIO DATA</h2>
//     <h2>Name:{props.name} </h2>
//     <h2>Age: {props.age}</h2>
//     <h2>Section:{props.section}</h2>
//     <h2>College: {props.clg}</h2>
//     <h2>Roll No: {props.roll}</h2>
//     <h2>Department:{props.department}</h2> */}


    
//   {/* <h1>the id is: {props.id}</h1> */}


//    {/* {
//     props.arr.map((x) => {
//       return (
//         <li>{x}</li>
//       )
      
//     })
//   }  */}
  

//    <h1>{name}, {id}, {designation}</h1> 


  
//     </div>
//   )
// }

// export default Child;



import React from 'react'

const Child = (props) => {
  return (
    <div>
      <button onClick={() => props.fun()}>Click</button>
    </div>
  )
}

export default Child