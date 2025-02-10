console.log(window);
console.log(document);
console.log(document.head);
console.log(document.URL);
console.log(document.title);
document.title = "venkat"
console.log(document.doctype);
console.log(document.body);
let img = document.images
// console.log(img[0]);
// console.log(img[1]);
// console.log(img[2]);
for(let i = 0; i<img.length; i++){
    console.log(img[i]);
    img[i].style.height = "400px"
    img[i].style.width = "300px"
    img[i].style.borderRadius = "20%"
    img[i].alt = "image"
}



//in direct access in dom or (methods in dom)
//
// 1)document.getElementById("value")
// 2)document.getElementByclassName("value")
//3) document.getElementsByTagName("value")
// 4)document.getElementByName("value")
// 5)document.querySelector("value")
// 6)document.querySelectorAll("value")

let a = document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent = "batch5"
a.style.backgroundColor = "red"
a.style.textAlign = "center"

let a1 = document.getElementsByClassName("demo1")
console.log(a1);
console.log(a1[0]);
console.log(a1[0].textContent);
a1[0].textContent = "helloworld"
a1[0].style.color = "yellow"
console.log(a[1]);

let b = document.getElementsByTagName('ol')
console.log(b);
console.log(b[1]);
b[1].style.backgroundColor = "blue";

let c = document.getElementsByName('demo2')
console.log(c);
console.log(c[1]);
c[1].style.color = "blue"
//query selector
let d = document.querySelector("#demo")
console.log(d);
 let f = document.querySelector(".demo1")
 console.log(f)


//queryselector all
let e = document.querySelectorAll("#demo")
console.log(e);


let g = document.querySelectorAll(".demo1")
console.log(g);
console.log(g[1]);

function event1(){
    console.log("hello-worlds")
}
//event1()



