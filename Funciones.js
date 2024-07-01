const verificar = async () => {
    const n = ""
    let j = 0
    if (document.getElementById('input_nombre').value.length < 3) {
        document.getElementById('input_nombre').value = n;
        alert("Nombre invalido, tiene que ser mayor a dos letras")
        document.getElementById('input_nombre').style.backgroundColor = "red";

        j = 1;
    }

    if (document.getElementById('input_apellido').value.length < 3) {
        document.getElementById('input_apellido').value = n;
        alert("Apellido invalido, tiene que ser mayor a dos letras")
        document.getElementById('input_apellido').style.backgroundColor = "red";
        j = 1;
    }
    let emailvalido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!document.getElementById('input_email').value.match(emailvalido)) {
        document.getElementById('input_email').value = n;
        alert("Email invalido, contiene caracteres invalidos")
        document.getElementById('input_email').style.backgroundColor = "red";
        j = 1;
    }

    if (document.getElementById('input_edad').value < 18) {
        document.getElementById('input_edad').value = n;
        alert("No contratamos menores de edad")
        document.getElementById('input_edad').style.backgroundColor = "red";
        j = 1;
    }
    if (document.getElementById('input_tel').length < 4 || !document.getElementById('input_tel').value.match(/^[0-9]{1,3}[0-9]{1,4}$/)) {
        document.getElementById('input_tel').value = n;
        alert("Teléfono invalido")
        document.getElementById('input_tel').style.backgroundColor = "red";
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