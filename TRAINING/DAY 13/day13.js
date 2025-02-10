// window.fetch("day13.json")
// .then((data) => data.json())
// .then((res) => {
//     console.log(res);
//     res.map((x) => {
//         console.log(x.name);
//         console.log(x.id);
//        document.body.innerHTML += `<h2>${x.name}</h2>`
//        document.body.innerHTML += `<h2>${x.id }</h2>`
//        document.body.innerHTML += `<h2>${x.designation}</h2>`

//     })

// })
// .catch(() => console.log("error occured"))

//--------------------------------------------------------------------------------------

let btn = document.getElementById("btn")
console.log(btn);

btn.onclick = () => {
    let search = document.getElementById("search").value
    console.log(search);
    let page = 30
    window.fetch(`https://pixabay.com/api/videos/?key=48474876-45058176a2ec4da0649ff2baf&q=${search}&pretty=true`)
    .then((data) => data.json())
    .then((res) => {
        console.log(res);
        console.log(res.hits);
        res.hits.map((x) => {
            console.log(x);
            let demo = document.getElementById("demo")
            console.log(demo);
            demo.innerHTML += `<img src=${x.previewURL}/>`
        })
        

    })
    
}

