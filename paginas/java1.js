let nombre = localStorage.getItem("nombre")

document.querySelector(".imguno").innerHTML += "<p>"+nombre+"</p>";

document.querySelector("img").addEventListener("click", ()=>{
    document.querySelector("a").href = "../peliculas/index.html"
})