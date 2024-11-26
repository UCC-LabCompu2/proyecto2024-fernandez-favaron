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
        alert("Teléfono inválido, recuerde agregar el +54 o la característica que corresponda a su pais.");
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
    await EsperarImagen("img/one.png");
    await EsperarImagen("img/two.png");
    const img = new Image();
    img.src = "img/zero.png";
    ctx.drawImage(img, 0, 0);
    ctx.fillStyle = '#000';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'left';
    const lineas = [
        'Modelo: 3250',
        '30 metros de varal',
        '3250 litros',
        '9 cortes por sección',
        'Piloto trimble',
        '4×2',
        'Motor Deutz',
        'Cañería de acero inoxidable'
    ];
    for (let i = 0; i < lineas.length; i++) {
        ctx.fillText(lineas[i], 0, 500 + (i * 25));
    }
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
const imagen = (a) => {
    let n = parseInt(localStorage.getItem('con')) + a;
    const canvas = document.getElementById("Fumiga");
    const ctx = canvas.getContext("2d");
    if (n < 0) {
        n = 2;
    }
    if (n > 2) {
        n = 0;
    }
    canvas.width = canvas.width;
    ctx.font = "60px Arial";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText("Cargando...", 384, 200, 400);

    let lineas, imgsrc, direccion;
    switch (n) {
        case 0:
            lineas = [
                'Modelo: 3250',
                '30 metros de varal',
                '3250 litros',
                '9 cortes por sección',
                'Piloto trimble',
                '4×2',
                'Motor Deutz',
                'Cañería de acero inoxidable'
            ];
            imgsrc = "img/zero.png";
            break;
        case 1:
            lineas = [
                "Modelo: MAP II 3500",
                "30 metros de varal",
                "3500 litros",
                "9 cortes por sección",
                "Computadora de aplicación Muller",
                "4×2",
                "Motor Deutz",
                "Cañería de acero inoxidable"
            ];
            imgsrc = "img/one.png";
            break;
        case 2:
            lineas = [
                "Modelo 4630",
                "28 metros de baral",
                "7 cortes por sección",
                "Sensores de altura",
                "Pantalla 4640",
                "Tanque de plástico",
                "Eductor",
                "Rodado 380/80R38"
            ];
            imgsrc = "img/two.png";
            break;
        default:
            break;
    }
    direccion = a < 0 ? 'derecha' : 'izquierda';

    localStorage.setItem('con', n.toString());

    animatedef(imgsrc, lineas, direccion);
}

/**
 * Función que crea una animación para mostrar una foto y texto
 * @method esperar
 * @param {string} imgsrc - Cuál imagen debe cargar según su ubicación
 * @param {string} lineas - El texto que debe aparecer abajo de la imagen
 * @param {string} direccion - De qué dirección debe aparecer la imagen
 */
const animatedef = (imgsrc, lineas, direccion) => {
    const canvas = document.getElementById("Fumiga");
    const ctx = canvas.getContext("2d");
    let x = direccion === 'izquierda' ? -canvas.width : canvas.width; // Iniciar desde la izquierda o derecha
    const img = new Image();
    img.src = imgsrc;

    const dx = direccion === 'izquierda' ? 8 : -8; // Velocidad de desplazamiento
    const textY = 500;

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, x, 0);

        ctx.fillStyle = '#000';
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'left';
        for (let i = 0; i < lineas.length; i++) {
            ctx.fillText(lineas[i], x, textY + (i * 25));
        }

        const anchoReal = img.width > 0 ? img.width : ctx.measureText(lineas[0]).width;

        x += dx;

        if ((direccion === 'izquierda' && x <= canvas.width / 2 - anchoReal / 2) ||
            (direccion === 'derecha' && x >= canvas.width / 2 - anchoReal / 2)) {
            requestAnimationFrame(animate);
        }
    };

    img.onload = () => {
        animate();
    };
};