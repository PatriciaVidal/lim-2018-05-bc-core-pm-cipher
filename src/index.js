
var encriptar = document.getElementById("encriptar");
let llavecodigo = document.getElementById("llavecodigo");
const cifrar1 = document.getElementById("cifrar1");
const descifrar1 = document.getElementById("descifrar1");
let soluciones= document.getElementById("soluciones");

encriptar.addEventListener("input", () => {
    console.log (encriptar.value);
    })

llavecodigo.addEventListener("input", () => {
    console.log (llavecodigo.value);
    })
    
cifrar1.addEventListener("click", cifrar);

descifrar1.addEventListener("click", descifrar);

soluciones.addEventListener("input", () => {
   console.log (soluciones.value);
   })
