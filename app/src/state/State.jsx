// // // // import React, { useState } from 'react'

// // // // const State = () => {
// // // //     let [name , setName] = useState("10")
// // // //     console.log(name);
// // // //     console.log(setName);
     
// // // //     let demo = () => {
// // // //         setName("20")

// // // //     }

// // // //   return (
// // // //     <div>
// // // //         <h1 style={{color : 'red'}}>{name}</h1>
// // // //         <img src="" alt="" />
// // // //         <button style={{backgroundColor: 'green'}}onClick={demo}>Click</button>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default State;

// // // import React, { useState } from 'react'

// // // const State = () => {
// // //   let [state, setState] = useState(0)

// // //   let incr = () =>{
// // //     setState(state + 1)

// // //   }
// // //   let reset = () =>{
// // //     setState(0)
// // //   }
// // //   let decr = () =>{
// // //     setState(state - 1)

// // //   }

// // //   return (
// // //     <>
// // //     <h1 style={{textAlign: "center", color: "violet"}}> {state}</h1>
// // //     <button style={{backgroundColor: "red"}}onClick={incr}>Increment</button>
// // //     <button style={{backgroundColor: "blue"}}onClick={reset}>Reset</button>
// // //     <button style={{backgroundColor: "green"}}onClick={decr} >Decrement</button>
// // //     </>
// // //   )
// // // }

// // // export default State;


// // import React, { useState } from 'react'
// // import { use } from 'react'


// // const State = () => {
// //   let [name ,setName] = useState('')
// //   let [password ,setPassword] = useState('')

// //   let demo = (e) =>{
// //     e.preventDefault()
// //     console.log({name ,password});
// //     name === "admin" && password === '12345' ?
// //      window.open("http://www.pixabay.com") : console.log("error");
// //   }
// //   return (
// //     <>
// //     <form action="">
// //       <label htmlFor="name">Name:</label>
// //       <input type="text" name="name" id="name"  value={name} onChange={(e) => {setName(e.target.value)}}/>
// //       <br />
// //       <label htmlFor="password">Password:</label>
// //       <input type="password" name="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
// //       <br />
// //       <button onClick={demo}>Submit</button>
// //     </form>
// //     </>
// //   )
// // }

// // export default State;



// import React, { useRef , useState } from 'react'
//
// const State = () => {
//   let [state, setState] = useState(true)
//   let ref1 = useRef()
//   let demo = () => {
//     setState(!state)
//     state === true ? ref1.current.play() : ref1.current.pause()   
//   }

//   return (
//     <div>
//       <video src={video} height="300px" ref={ref1}></video>
//       <button onClick={demo}>Click</button>
//     </div>
//   )
// }

// export default State;


