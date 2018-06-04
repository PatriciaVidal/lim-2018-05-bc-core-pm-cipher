# Proyecto #1  
### Cifrado C�sar 


#### Explicaci�n del uso:
Para el proyecto cre� una app de uso sencillo. Env�o un link a los invitados de la fiesta secreta de cumplea�os, [cifrado cesar](https://patriciavidal.github.io/lim-2018-05-bc-core-pm-cipher/src/) , al abrir el link contiene una caja de texto al lado de la palabra **Mensaje** en la que puedes escribir un texto, a continuaci�n encuentras una segunda caja al lado de la palabra **Llave** para digitar un n�mero (puede ser de 1 o 2 digitos) que va a elegir el movimiento de posiciones de las letras, para al darle click en el bot�n **Encriptar** salga el texto encriptado en la tercera caja de texto, de igual manera puedes desencriptar el mensaje dandole click al bot�n **Desencriptar**, de igual manera el resultado saldr� el la tercera caja de texto. Finalmente una vez teniendo el texto encriptado puedes darle click al bot�n **Enviar al correo** para que el mensaje cifrado llegue a quien organiza la fiesta secreta.

Este formato ayuda a mantener de forma privada el mensaje de los invitados que luego ser� p�blico en la fiesta secreta.

#### Explicaci�n del cifrado:

**HTML**: En el archivo Html cre� la estructura de mi app, en la que separ� el titulo (head), el texto y los botones (en body).Adem�s de utilizar script que enlaza mi archivo javascript en donde se vinculan las funciones necesarias para el cifrado cesar.

**JAVASCRIPT**: Cre� los botones encriptar y desencriptar utilizando javascript, en el archivo index.js est�n los eventos del DOM cifrar1 con la variable text, key y soluciones en la que llaman a los respectivos id que fueron declarados anteriormente en el archivo html que luego en la consola imprimir� el valor que escriba el usuario en las cajas de texto. Mientras que en el archivo cipher.js se encuentran los m�todos: encode y decode. En el que encode tend� un offset que se encargue de mover posiciones a la derecha en el alfabeto, y en el decode tenga un offset que mueva la posiciones a la izquierda de tal manera que imprima en la consola ambos resultados al elegir cualquiera de los botones.

**CSS**: Cre� el archivo style.css para el dise�o de la app, en ella di: color, forma, espacios, centrado, tama�os de texto; eleg� una imagen de confeti con fondo transparente en formato png que la repet� a lo largo del fondo superior con background-repeat (en CSS) para hacer una referencia a cumplea�os, y un color de fondo neutro por que los usuarios son tanto hombres como mujeres. Adem�s agregu� en las cajas tanto de texto como los botones un cursor pointer que es cuando pasas el mouse sobre un objeto y el mouse cambia de forma.

Test: usando el comando npm test, nos guia para ver que las funciones funcionen correctamente, como tambi�n para corregir la sintaxis y haya menos margen de error.

Realic� una [encuesta](https://www.survio.com/survey/d/T9L7O8F5N9L5N9D5G) breve para saber si era sencillo el uso de la app y otros detalles m�s respecto al dise�o.

Archivos adjuntos: 
- Sketching, boceto a mano de la idea inicial del proyecto.
- Prototipado, boceto creado con el programa Balsamiq Mockups (para version web y para version celular).

#### Imagenes:

![Scketching][1]  

![Mockup][2]  


[1]: Read.md/scketching.jpg "Scketching"
[2]: Read.md/Mockup_cifradocesar.jpg "Prototipado app web y celular"


Gracias!


##### Patricia Vidal