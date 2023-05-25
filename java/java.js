function valores() {
  let nombre = document.querySelector("#nombre").value;
  let email = document.querySelector("#email").value;
  let contraseña = document.querySelector("#contraseña").value;
  let vec = [nombre, email, contraseña];
  return vec
}

document.querySelector("#enviar").addEventListener("click", (e)=>{
  let valor = valores();
  localStorage.setItem("nombre", valor[0]);
  localStorage.setItem("email", valor[1]);
  localStorage.setItem("contraseña", valor[2]);
  if ((valor[0] == "") || (valor[1]=="") || (valor[2]=="")){
    document.querySelector(".decir").innerHTML = "<p>"+"complete el formulario"+"</p>";
  }else{
    document.querySelector(".decir").innerHTML = "<p>"+"se encuntra registrado"+"</p>";
  }
  e.preventDefault();
})

document.querySelector("#sing").addEventListener("click", (e)=>{
  e.preventDefault();
  document.querySelector(".validar").setAttribute("display", "flex")
  document.querySelector(".validar").classList.remove('validar1');
});

function validacion(){
  document.querySelector(".incorrec").innerHTML = "";
  let email1 = document.querySelector("#email-1").value;
  let contraseña1 = document.querySelector("#contraseña1").value;
  if ((email1 == localStorage.getItem("email")) && (contraseña1 == localStorage.getItem("contraseña"))) {
    document.querySelector("#login").href = "paginas/index.html";
    // agrege una etique a y lo que hice fue a que cuando los campos estubieran correctos cambiar la ubicacion y me lleve a la pagina de las pantallas
  }else{
    document.querySelector(".incorrec").innerHTML += "<p class'usuari'>"+"usuario o contraseña incorrectos"+"</p>" 
  }
}
document.querySelector("#login").addEventListener("click", validacion);
