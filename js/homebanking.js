//Declaración de Variables.
var nombreUsuario = "Maria Julia Errazu";
var saldoCuenta = 25000;
var limiteExtraccion = 2500;
var passwordParaEntrar = "maju";



//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    var ingreso = iniciarSesion();


    if (ingreso) {
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
    }
}

function cambiarLimiteDeExtraccion() {
    var cambioLimiteExtraccion = parseInt(prompt("Desea modificar el límite de extraccion?"))
    if (cambioLimiteExtraccion === limiteExtraccion) {
        alert("El importe ingresado es el mismo a su actual límite de extracción diario");
        return;
    }
    if (isNaN(cambioLimiteExtraccion)) {
        alert("Número Incorrecto, vuelva a intentar");
        return;
    }
    if (cambioLimiteExtraccion < limiteExtraccion) {
        var confirmacionLimite = confirm("Usted está seguro en que su límite de extraccíon diario sea menor al Limite de extracción Actual?");
        if (!confirmacionLimite) {
            return;
        }

    } else {
        alert("Su nuevo límite diario de extracción es de \n$ " + cambioLimiteExtraccion);
    }

    limiteExtraccion = cambioLimiteExtraccion;
    actualizarLimiteEnPantalla();

}

function extraerDinero() {
    var retiroDinero = parseInt(prompt("Cuanto dinero quiere extraer?"));
    var saldoDisponible = limiteExtraccion - retiroDinero;

    saldoActual = saldoCuenta - retiroDinero;

    if (isNaN(retiroDinero)) {
        alert("Número Incorrecto, vuelva a intentar");
        return;

    }
    if (retiroDinero <= limiteExtraccion) {
        console.log(saldoCuenta);
        console.log(retiroDinero);

        saldoCuenta = saldoCuenta - retiroDinero;
        alert("* Usted retiró $" + retiroDinero + "\n* Saldo Actual $" + saldoActual + "\n* Saldo Disponible $" + saldoDisponible);

    } else {
        alert("Excedio su limite diario");
        return
    }
    if (retiroDinero < saldoCuenta) {
        saldoCuenta = saldoCuenta - retiroDinero;
    } else {

        alert("Saldo Actual insuficiente para realizar este retiro");
        return;
    }

    actualizarSaldoEnPantalla();
}



function depositarDinero() {
    var saldoActual = saldoCuenta;
    var ingresoDinero = parseInt(prompt("Cuanto dinero quiere depositar?"));
    if (isNaN(ingresoDinero)) {
        alert("Número Incorrecto, vuelva a intentar");
        return;
    }
    saldoCuenta = saldoCuenta + ingresoDinero;
    actualizarSaldoEnPantalla();
    alert("* Valor Depositado $" + ingresoDinero + "\n* Saldo Anterior $" + saldoActual + "\n* Saldo Actual $" + saldoCuenta);
}

function pagarServicio() {
    var servicio = parseInt(prompt("Que servicio desea pagar?\n 1-Gas \n 2-Luz \n 3-Agua"));
    if (servicio == 1) {
        alert("Usted está pagando:\n* Gas = $700");
        saldoCuenta = saldoCuenta - 700;
    }

    if (servicio == 2) {
        alert("Usted está pagando: \n* Luz = $300");
        saldoCuenta = saldoCuenta - 300;

    }
    if (servicio == 3) {
        alert("Usted está pagando:\n* Agua = $500");
        saldoCuenta = saldoCuenta - 500;
    }

    actualizarSaldoEnPantalla();
}


function transferirDinero() {
    var transferencia = parseInt(prompt("n° de Cuenta a la que desea transferir"));

    if (isNaN(transferencia)) {
        alert("Número Incorrecto, vuelva a intentar");
        return;

    }

    importe = parseInt(prompt("Cual es el importe que desea transferir a la cuenta n° " + transferencia));
    alert("Esta seguro que quiere transferir el importe $" + importe);

    saldoCuenta = saldoCuenta - importe;
    actualizarSaldoEnPantalla();
}

function iniciarSesion() {
    var password = prompt('Ingrese password')
    if (password == passwordParaEntrar) {
        return true;
    } else {
        alert("error");
        iniciarSesion();

    }
}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {

    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

actualizarSaldoEnPantalla();
cargarNombreEnPantalla();