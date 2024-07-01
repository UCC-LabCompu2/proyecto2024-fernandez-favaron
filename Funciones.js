const verificarNombre = () => {
    if (document.getElementById('input_nombre').value.length < 3) {
        document.getElementById('input_nombre').value = "";
        alert("Nombre invalido, tiene que ser mayor a dos letras")
        document.getElementById('input_nombre').style.backgroundColor = "red";

        return false;
    } else {
        document.getElementById('input_nombre').style.backgroundColor = "green";
        return true;
    }
}

const verificarApellido = () => {
    if (document.getElementById('input_apellido').value.length < 3) {
        document.getElementById('input_apellido').value = "";
        alert("Apellido invalido, tiene que ser mayor a dos letras")
        document.getElementById('input_apellido').style.backgroundColor = "red";

        return false;
    } else {
        document.getElementById('input_apellido').style.backgroundColor = "green";
        return true;
    }
}

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

const EsperarImagen = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img.height);
        img.onerror = reject;
        img.src = src;
    });
};

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

const esperar = (tiempo) => new Promise((existo) => setTimeout(existo, tiempo))

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
    localStorage.setItem('con', n);
}