// agrergar imagnes acada una de las filas
let fila1 = ['imagenes/fila1/uno.png','imagenes/fila1/dos.png','imagenes/fila1/tres.png','imagenes/fila1/cuatro.png','imagenes/fila1/cinco.png','imagenes/fila1/seis.png','imagenes/fila1/siete.png']
for (i = 0; i < fila1.length; i++) {
    document.querySelector(".fila1 .contieneimagenes").innerHTML += "<img src="+fila1[i]+">";
}
let fila2 = ['imagenes/fila2/uno.png','imagenes/fila2/dos.png','imagenes/fila2/tres.png','imagenes/fila2/cuatro.png','imagenes/fila2/cinco.png','imagenes/fila2/seis.png','imagenes/fila2/siete.png']
for (i = 0; i < fila2.length; i++) {
    document.querySelector(".fila2 .contieneimagenes").innerHTML += "<img src="+fila2[i]+">";
} 
let fila3 = ['imagenes/fila3/uno.png','imagenes/fila3/dos.png','imagenes/fila3/tres.png','imagenes/fila3/cuatro.png','imagenes/fila3/cinco.png']
for (i = 0; i < fila3.length; i++) {
    document.querySelector(".fila3 .contieneimagenes").innerHTML += "<img src="+fila3[i]+">";
} 
let fila4 = ['imagenes/fila4/uno.png','imagenes/fila4/dos.png','imagenes/fila4/tres.png','imagenes/fila4/cuatro.png','imagenes/fila4/cinco.png','imagenes/fila4/seis.png','imagenes/fila4/siete.png']
for (i = 0; i < fila4.length; i++) {
    document.querySelector(".fila4 .tendencias").innerHTML += "<img src="+fila4[i]+">";
}
// fila1 de peliculas
document.querySelector(".fila1 .contieneimagenes img:nth-child(1)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "Love You as the World Ends"
    document.querySelector(".pop .popcont p").textContent = "Un mecánico de automóviles lucha para sobrevivir a una invasión de muertos vivientes mientras se aferra a la esperanza de reunirse con la mujer que ama."
})
document.querySelector(".fila1 .contieneimagenes img:nth-child(2)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 2"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila1 .contieneimagenes img:nth-child(3)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 3"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila1 .contieneimagenes img:nth-child(4)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 4"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila1 .contieneimagenes img:nth-child(5)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 5"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila1 .contieneimagenes img:nth-child(6)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 6"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila1 .contieneimagenes img:nth-child(7)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 7"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector("#cerrar").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "none";
});
// fila 2 de pelculas
document.querySelector(".fila2 .contieneimagenes img:nth-child(1)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 1"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila2 .contieneimagenes img:nth-child(2)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 2"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila2 .contieneimagenes img:nth-child(3)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 3"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila2 .contieneimagenes img:nth-child(4)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 4"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila2 .contieneimagenes img:nth-child(5)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 5"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila2 .contieneimagenes img:nth-child(6)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 6"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila2 .contieneimagenes img:nth-child(7)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 7"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
});
// fila 3 de pelculas
document.querySelector(".fila3 .contieneimagenes img:nth-child(1)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 1"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila3 .contieneimagenes img:nth-child(2)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 2"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila3 .contieneimagenes img:nth-child(3)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 3"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila3 .contieneimagenes img:nth-child(4)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 4"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila3 .contieneimagenes img:nth-child(5)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 5"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
// fila 4 de peliculas
document.querySelector(".fila4 .tendencias img:nth-child(1)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 1"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila4 .tendencias img:nth-child(2)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 2"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila4 .tendencias img:nth-child(3)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 3"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila4 .tendencias img:nth-child(4)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 4"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila4 .tendencias img:nth-child(5)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 5"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila4 .tendencias img:nth-child(6)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 6"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})
document.querySelector(".fila4 .tendencias img:nth-child(7)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 7"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
})