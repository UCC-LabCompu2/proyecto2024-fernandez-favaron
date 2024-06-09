const verificar = () => {
    let n = ""
    let j = 0
    if (document.getElementById('input_nombre').value.length < 3) {
        document.getElementById('input_nombre').value = n;
        alert("Nombre invalido, tiene que ser mayor a dos letras")
        j = 1;
    }

    if (document.getElementById('input_apellido').value.length < 3) {
        document.getElementById('input_apellido').value = n;
        alert("Apellido invalido, tiene que ser mayor a dos letras")
        j = 1;
    }
    let emailvalido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!document.getElementById('input_email').value.match(emailvalido)) {
        document.getElementById('input_email').value = n;
        alert("Email invalido, contiene caracteres invalidos")
        j = 1;
    }

    if (document.getElementById('input_edad').value < 18) {
        document.getElementById('input_edad').value = n;
        alert("No contratamos menores de edad")
        j = 1;
    }
    if (document.getElementById('input_tel').length < 4 || !document.getElementById('input_telefono').value.match(/^[0-9]{1,3}[0-9]{1,4}$/)) {
        document.getElementById('input_tel').value = n;
        alert("Teléfono invalido")
        j = 1;
    }
    if (j === 0) {
        alert("Gracias por completar el formulario correctamente")
    }

};

const carga = () => {
    localStorage.setItem('con', "0")
    const canvas = document.getElementById("Fumiga");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "img/zero.png";
    ctx.drawImage(img, 0, 0);
}

let imagen = (a) => {
    let n = parseInt(localStorage.getItem('con')) + a;
    const canvas = document.getElementById("Fumiga");
    const ctx = canvas.getContext("2d");
    if (n < 0) {
        n = 2
    }
    const img = new Image();
    if (n === 0) {
        img.src = "img/zero.png";
        localStorage.setItem('con', n)
    }
    if (n === 1) {
        img.src = "img/one.png";
        localStorage.setItem('con', n)
    }
    if (n === 2) {
        img.src = "img/two.png";
        localStorage.setItem('con', n)
    }
    ctx.drawImage(img, 0, 0);
}