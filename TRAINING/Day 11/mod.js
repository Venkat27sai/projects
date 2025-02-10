let a = document.createElement("h1")
console.log(a);
a.textContent = "hello"
document.body.append(a)
a.style.backgroundColor = 'red'

let div = document.getElementById("demo")
console.log(div);
div.style.border = "5px solid"

let ol = document.createElement("ol")
console.log(ol);
div.append(ol);

let li1 = document.createElement("li")
console.log(li1);
li1.textContent = "react";
ol.append(li1);

let li2 = document.createElement("li")
console.log(li2);
li2.textContent = "node.js";
ol.append(li2);

ol.setAttribute("type" , "A");

//create a table tag

let table = document.createElement("table")
console.log(table);

table.setAttribute("border", "2px solid black")

//append table to parent
document.body.appendChild(table)

//create tr tag

let tr1 = document.createElement("tr")
console.log(tr1);

table.appendChild(tr1);

//create td tag

let td1 = document.createElement("td")
 console.log(td1);
 td1.textContent = "venkat"

 //append td to tr

 tr1.appendChild(td1);



 let td2 = document.createElement("td")
 console.log(td2);
 td2.textContent = "sai"

 //append td to tr

 tr1.appendChild(td2);



 let td3 = document.createElement("td")
 console.log(td3);
 td3.textContent = "sunny"

 //append td to tr

 tr1.appendChild(td3);

 let td4 = document.createElement("td")
console.log(td4);
 td4.textContent = "gokul"

 //append td to tr

 tr1.appendChild(td4);





