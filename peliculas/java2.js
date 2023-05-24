let fila1 = ['imagenes/fila1/uno.png','imagenes/fila1/dos.png','imagenes/fila1/tres.png','imagenes/fila1/cuatro.png']
for (i = 0; i < fila1.length; i++) {
    document.querySelector(".fila1 .contieneimagenes").innerHTML += "<img src="+fila1[i]+">";
}
let fila2 = ['imagenes/fila2/uno.png','imagenes/fila2/dos.png','imagenes/fila2/tres.png','imagenes/fila2/cuatro.png']
for (i = 0; i < fila2.length; i++) {
    document.querySelector(".fila2 .contieneimagenes").innerHTML += "<img src="+fila2[i]+">";
} 
let fila3 = ['imagenes/fila3/uno.png','imagenes/fila3/dos.png','imagenes/fila3/tres.png']
for (i = 0; i < fila3.length; i++) {
    document.querySelector(".fila3 .contieneimagenes").innerHTML += "<img src="+fila3[i]+">";
} 
let fila4 = ['imagenes/fila4/uno.png','imagenes/fila4/dos.png','imagenes/fila4/tres.png']
for (i = 0; i < fila4.length; i++) {
    document.querySelector(".fila4 .tendencias").innerHTML += "<img src="+fila4[i]+">";
} 