/**
 * Verifica que el nombre ingresado no contenga: la primera letra en minúscula, números y tenga más de 3 letras.
 * @method verificarNombre
 * @return {Boolean} - válido → true
 */
const verificarNombre = () => {
    const nombre = document.getElementById('input_nombre').value.trim();

    if (nombre.length < 3) {
        document.getElementById('input_nombre').value = "";
        alert("Nombre inválido, debe tener más de dos letras");
        document.getElementById('input_nombre').style.backgroundColor = "red";
        return false;
    }

    if (/\d/.test(nombre)) {
        document.getElementById('input_nombre').value = "";
        alert("Nombre inválido, no debe contener números");
        document.getElementById('input_nombre').style.backgroundColor = "red";
        return false;
    }

    if (nombre.charAt(0) !== nombre.charAt(0).toUpperCase()) {
        document.getElementById('input_nombre').value = "";
        alert("Nombre inválido, la primera letra debe estar en mayúscula");
        document.getElementById('input_nombre').style.backgroundColor = "red";
        return false;
    }

    document.getElementById('input_nombre').style.backgroundColor = "green";
    return true;
}
/**
 * Verifica que el apellido ingresado no contenga: la primera letra en minúscula, números y tenga más de 3 letras.
 * @method verificarApellido
 * @return {Boolean} - válido → true
 */
const verificarApellido = () => {
    if (document.getElementById('input_apellido').value.length < 3) {
        document.getElementById('input_apellido').value = "";
        alert("Apellido invalido, tiene que ser mayor a dos letras")
        document.getElementById('input_apellido').style.backgroundColor = "red";

        return false;
    }

    if (/\d/.test(document.getElementById('input_apellido').value)) {
        document.getElementById('input_apellido').value = "";
        alert("Nombre inválido, no debe contener números");
        document.getElementById('input_apellido').style.backgroundColor = "red";
        return false;
    }

    if (document.getElementById('input_apellido').value.charAt(0) !== document.getElementById('input_apellido').value.charAt(0).toUpperCase()) {
        document.getElementById('input_apellido').value = "";
        alert("Apellido inválido, la primera letra debe estar en mayúscula");
        document.getElementById('input_apellido').style.backgroundColor = "red";
        return false;
    }

    document.getElementById('input_apellido').style.backgroundColor = "green";
    return true;
}
/**
 * Verifica que el email sea válido, para esto mira que contenga algo@algo.algo
 * @method verificarMail
 * @return {Boolean} - valido => true
 */
const verificarMail = () => {
    const EmailValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!document.getElementById('input_email').value.match(EmailValido)) {
        document.getElementById('input_email').value = "";
        alert("Email invalido, contiene caracteres no permitidos")
        document.getElementById('input_email').style.backgroundColor = "red";

        return false;
    } else {
        document.getElementById('input_email').style.backgroundColor = "green";
        return true;
    }
}
/**
 * Verifica que la edad no este vaciá, sea un número y sea mayor de 17
 * @method verificarEdad
 * @return {Boolean} - válido → true
 */

const verificarEdad = () => {
    const inputEdad = document.getElementById('input_edad').value.trim();

    if (inputEdad === "") {
        alert("Ingrese su edad en el campo");
        document.getElementById('input_edad').style.backgroundColor = "red";
        return false;
    }

    if (isNaN(inputEdad)) {
        alert("Ingrese un número válido para la edad");
        document.getElementById('input_edad').style.backgroundColor = "red";
        return false;
    }

    const edad = parseInt(inputEdad, 10);

    if (edad < 18) {
        alert("No contratamos menores de edad");
        document.getElementById('input_edad').style.backgroundColor = "red";
        return false;
    } else {
        document.getElementById('input_edad').style.backgroundColor = "green";
        return true;
    }
}
/**
 * Verifica que el teléfono sea válido, acepta +.
 * @method verificarTel
 * @return {Boolean} - válido → true
 */

const verificarTel = () => {
    const tel = document.getElementById('input_tel').value.trim();

    if (tel.length < 4 || !tel.match(/^\+(?:[0-9] ?){6,14}[0-9]$/)) {
        document.getElementById('input_tel').value = "";
        alert("Teléfono inválido");
        document.getElementById('input_tel').style.backgroundColor = "red";

        return false;
    } else {
        document.getElementById('input_tel').style.backgroundColor = "green";
        return true;
    }
}
/**
 * Llama a cada método para verificar cada campo necesario, luego muestra un mensaje en caso de que to.do este correcto y te redirecciona al index
 * @method verificar
 */
const verificar = async () => {
    let j = 0
    if (!verificarNombre()) {
        j = 1;
    }
    if (!verificarApellido()) {
        j = 1;
    }
    if (!verificarMail()) {
        j = 1;
    }
    if (!verificarEdad()) {
        j = 1;
    }
    if (!verificarTel()) {
        j = 1;
    }
    if (j === 0) {
        alert("Gracias por completar el formulario correctamente")
        await esperar(2000);
        window.location.href = 'index.html';
    }

};
/**
 * Crea una promesa para esperar que cargue una imagen
 * @method EsperarImagen
 * @param {string} src - ubicación de la imagen
 * @return {Promise} - Retorna una promesa para que la función que la llama espere a que cargue la imagen de la ubicación
 */
const EsperarImagen = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img.height);
        img.onerror = reject;
        img.src = src;
    });
};
/**
 * Pone la primera imagen cuando carga la página y muestra su descripción
 * @method carga
 */
const carga = async () => {
    localStorage.setItem('con', "0")
    const canvas = document.getElementById("Fumiga");
    const ctx = canvas.getContext("2d");
    ctx.font = "60px Arial";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText("Cargando...", 384, 200, 400);
    await EsperarImagen("img/zero.png");
    const img = new Image();
    img.src = "img/zero.png";
    ctx.drawImage(img, 0, 0);
    document.getElementById('0').style.visibility = "visible";
    document.getElementById('1').style.visibility = "hidden";
    document.getElementById('2').style.visibility = "hidden";
}
/**
 * Función que al ser llamada por otra la hace esperar el tiempo recibido mediante una promesa
 * @method esperar
 * @param {int} tiempo - La cantidad de tiempo que debe esperar
 * @return {Promise} - Retorna una promesa que hace esperar a la función el tiempo recibido
 */
const esperar = (tiempo) => new Promise((existo) => setTimeout(existo, tiempo))
/**
 * Cambia la imagen y el texto que se muestra en pantalla.
 * @method imagen
 * @param {int} a - indica si debe cambiar de imagen hacia la izquierda o derecha.
 */
const imagen = async (a) => {
    let n = parseInt(localStorage.getItem('con')) + a;
    const canvas = document.getElementById("Fumiga");
    const ctx = canvas.getContext("2d");
    if (n < 0) {
        n = 2
    }
    if (n > 2) {
        n = 0;
    }
    canvas.width = canvas.width;
    ctx.font = "60px Arial";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText("Cargando...", 384, 200, 400);
    const img = new Image();
    if (n === 0) {
        await EsperarImagen("img/zero.png");
        img.src = "img/zero.png";
        document.getElementById('0').style.visibility = "visible";
        document.getElementById('1').style.visibility = "hidden";
        document.getElementById('2').style.visibility = "hidden";
        ctx.drawImage(img, 0, 0);
    }
    if (n === 1) {
        await EsperarImagen("img/one.png");
        img.src = "img/one.png";
        document.getElementById('0').style.visibility = "hidden";
        document.getElementById('1').style.visibility = "visible";
        document.getElementById('2').style.visibility = "hidden";
        ctx.drawImage(img, 84, -50);
    }
    if (n === 2) {
        await EsperarImagen("img/two.png");
        img.src = "img/two.png";
        document.getElementById('0').style.visibility = "hidden";
        document.getElementById('1').style.visibility = "hidden";
        document.getElementById('2').style.visibility = "visible";
        ctx.drawImage(img, 0, 0);
    }
    localStorage.setItem('con', n.toString());
}