const cifrar1 = document.getElementById("cifrar1");
cifrar1.addEventListener("click", () => {
    let text = document.getElementById("encriptar").value.toUpperCase();
    let key = parseInt(document.getElementById("llaveCodigo").value);
    let soluciones = document.getElementById("soluciones");
    soluciones.value = cipher.encode(key,text);
    });
 
const descifrar1 = document.getElementById("descifrar1");
descifrar1.addEventListener("click", () => {
    let text2 = document.getElementById("desencriptar").value.toUpperCase();
    let key = parseInt(document.getElementById("llaveCodigo").value);
    let soluciones = document.getElementById("soluciones");
    soluciones.value = window.cipher.decode(key,text2);
    });