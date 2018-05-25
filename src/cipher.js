
        const cifrar = () => {
            let encriptar = document.getElementById("encriptar").value.toUpperCase();
            let llavecodigo = parseInt(document.getElementById("llavecodigo").value);
            let textor = "";
            for (var i = 0; i < encriptar.length;i++) {
                textor += String.fromCharCode((encriptar.charCodeAt(i) -65 +llavecodigo) % 26 +65);
            }
            document.getElementById("soluciones").value = textor;
         }
        
         const descifrar = () => {
            let encriptar = document.getElementById("soluciones").value.toUpperCase();
            let llavecodigo = parseInt(document.getElementById("llavecodigo").value);
            let textor = "";
            for (var i = 0; i < encriptar.length;i++) {
                textor += String.fromCharCode((encriptar.charCodeAt(i) +65 -llavecodigo) % 26 +65);
            }
            document.getElementById("soluciones").value = textor;
         }
         
        //return element.addEventListener("respuesta")
       // }


window.cipher = {
    encode: cifrar,
    decode: descifrar
}

