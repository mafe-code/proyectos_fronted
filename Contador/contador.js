let cuenta = 0;

function actualizar() {
    document.getElementById("numero").innerHTML = cuenta;

    const btnAumentar = document.getElementById("btn-aumentar");

    if (cuenta >= 10) {
        btnAumentar.style.backgroundColor = "red";
    } else {
        btnAumentar.style.backgroundColor = "";
    }
}

function aumentar() {
    if (cuenta >= 20) return;
    cuenta++;
    actualizar();
}

function disminuir() {
    cuenta--;
    actualizar();
}

function reiniciar() {
    cuenta = 0;
    actualizar();
}
