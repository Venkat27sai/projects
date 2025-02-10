// // Syncronous
// //  window.setTimeout(() => {
// //     console.log("iam settimeout");
// //  },5000)

// //  window.setInterval(() => {
// //     console.log('iam setinterval');
// //  },3000)



// //Asynchronous

// // function main(m,n){
// //     setTimeout(() => {
// //         for (let i = m; i<=n; i++) {
// //             console.log(i);
// //         }
// // },5000)
// // }
// // main(1,"10")  

// // function sample(){
// //     console.log("No's printed");
// // }
// //sample()



// // let online = window.navigator.onLine
// // new Promise((resolve,reject) => {
// //     setTimeout(() => {
// //         if(online === true){
// //             return resolve()
            
// //         }else{
// //             return reject()
// //         } 
// //     },5000)
// // })
// // .then(() => console.log("online  ....😀"))
// // .catch(() => console.log("offline ....😞"))
   
// function main(m,n){
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isNaN(m) || isNaN(n)) {
//                 return reject()
//             }
//             for(let i=m; i<=n; i++){
//                 console.log(i);
//             } 
//             return resolve() 
//         },5000)

        
//     })
//     .then(() => console.log("promise"))
//     .then(() => console.log(10 * 10))
//     .catch(() => console.log("error occured"))
// }
// main(1,10)
// function sample(){
//     console.log("no's printed")
// }
// sample()
