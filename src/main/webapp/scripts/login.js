window.onload = function () {

    document.getElementById("nombre").focus();

}

function validarFormulario() {

    let nombre = document.getElementById("nombre").value.trim();
    let password = document.getElementById("password").value.trim();

    if(nombre === "" || password === ""){

        alert("Complete todos los campos.");

        return false;

    }

    return true;

}