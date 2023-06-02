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
    document.querySelector("#trailer").style.display = "block"
    document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "https://www.youtube.com/embed/8qNU4BPHEVo";
    });
})
document.querySelector(".fila1 .contieneimagenes img:nth-child(2)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "the tinder swindler"
    document.querySelector(".pop .popcont p").textContent = "Él se hacía pasar por magnate con una vida de lujo y seducía a mujeres por Internet para robarles millones de dólares. Ahora, sus víctimas se han unido para vengarse juntas."
    document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "https://www.youtube.com/embed/pKXzxzotBo4";
    });
})
document.querySelector(".fila1 .contieneimagenes img:nth-child(3)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "Forecasting Love and Weather"
    document.querySelector(".pop .popcont p").textContent = "Para una mujer no es fácil predecir días soleados y lluviosos, aún trabajando como meteoróloga. Más difícil aún es predecir el amor, incluso cuando llama a la puerta."
    document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "https://www.youtube.com/embed/B--OvWV3HFw";
    });
})
document.querySelector(".fila1 .contieneimagenes img:nth-child(4)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "Ella"
    document.querySelector(".pop .popcont p").textContent = "En Los Ángeles, un escritor desanimado desarrolla una especial relación amorosa con el sistema operativo de su computadora, una intuitiva y sensible entidad llamada Samantha."
    document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "https://www.youtube.com/embed/9c5iXvwi4kQ";
    });
})
document.querySelector(".fila1 .contieneimagenes img:nth-child(5)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "Breaking Bad"
    document.querySelector(".pop .popcont p").textContent = "El profesor calmado de química de una secundaria, Walter White cree que su vida no puede ser peor. Su salario apenas le alcanza para sostener a su familia, una situación que no mejora cuando su esposa da a luz y su hijo adolescente sufre de parálisis cerebral, pero Walter queda anonadado cuando se entera que tiene un cáncer terminal"
    document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "https://www.youtube.com/embed/YZWy7J1u9Wo";
    });
})
document.querySelector(".fila1 .contieneimagenes img:nth-child(6)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "The Flash"
    document.querySelector(".pop .popcont p").textContent = "Nueve meses después de la explosión en el laboratorio S.T.A.R., Barry despierta del coma y descubre que tiene el poder de la supervelocidad. Con la ayuda de su nuevo equipo, Barry, ahora The Flash, luchará contra el crimen en Ciudad Central."
    document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "https://www.youtube.com/embed/gun18R-zXVU";
    });
})
document.querySelector(".fila1 .contieneimagenes img:nth-child(7)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "El último reino"
    document.querySelector(".pop .popcont p").textContent = "El joven Uhtred pierde a su padre sajón en la batalla y su tío Aelfric le roba las tierras y la herencia. El muchacho también se convierte en guerrero, pero su familia sustituta es asesinada y Uhtred se encuentran solo."
    document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "https://www.youtube.com/embed/bJXZinbe_nQ";
    });
})
document.querySelector("#cerrar").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "none";
    document.querySelector("#video").style.display = "none";
    document.querySelector("#video").src = "";
    document.querySelector("#trailer").style.display = "block"
});
// fila 2 de pelculas
document.querySelector(".fila2 .contieneimagenes img:nth-child(1)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 1"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila2 .contieneimagenes img:nth-child(2)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 2"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila2 .contieneimagenes img:nth-child(3)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 3"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila2 .contieneimagenes img:nth-child(4)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 4"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila2 .contieneimagenes img:nth-child(5)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 5"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila2 .contieneimagenes img:nth-child(6)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 6"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila2 .contieneimagenes img:nth-child(7)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 7"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
});
// fila 3 de pelculas
document.querySelector(".fila3 .contieneimagenes img:nth-child(1)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 1"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila3 .contieneimagenes img:nth-child(2)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 2"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila3 .contieneimagenes img:nth-child(3)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 3"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila3 .contieneimagenes img:nth-child(4)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 4"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila3 .contieneimagenes img:nth-child(5)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 5"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
// fila 4 de peliculas
document.querySelector(".fila4 .tendencias img:nth-child(1)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 1"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila4 .tendencias img:nth-child(2)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 2"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila4 .tendencias img:nth-child(3)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 3"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila4 .tendencias img:nth-child(4)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 4"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila4 .tendencias img:nth-child(5)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 5"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila4 .tendencias img:nth-child(6)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 6"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})
document.querySelector(".fila4 .tendencias img:nth-child(7)").addEventListener("click", ()=>{
    document.querySelector(".pop").style.display = "block";
    document.querySelector(".pop .popcont h2").textContent = "pelicula 7"
    document.querySelector(".pop .popcont p").textContent = "Reseña de la pelicula"
        document.querySelector("#trailer").addEventListener('click', ()=>{
        document.querySelector(".pop .popcont h2").textContent = ""
        document.querySelector(".pop .popcont p").textContent = ""
        document.querySelector("#trailer").style.display = "none"
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").src = "";
    });
})

document.getElementById("casa").addEventListener('click', ()=>{
    document.getElementById("casa").href = "../index.html"
});


const primero1 = document.querySelector('.aparece1');
const primero2 = document.querySelector('.aparece2');
const primero3 = document.querySelector('.aparece3');
const primero4 = document.querySelector('.aparece4');

const cargarImagen = (entradas, observador) => {

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		} else {
			// entrada.target.classList.remove('visible');
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '-20% 0px',
	threshold: .2
});

observador.observe(primero1);
observador.observe(primero2);
observador.observe(primero3);
observador.observe(primero4);