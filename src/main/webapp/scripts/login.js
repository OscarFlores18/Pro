window.onload = function () {
    document.getElementById("nombre").focus();

    $("#loginForm").submit(function (e) {
        e.preventDefault();

        let nombre = $("#nombre").val().trim();
        let password = $("#password").val().trim();

        if (nombre === "" || password === "") {
            Swal.fire({
                icon: "warning",
                title: "Campos incompletos",
                text: "Complete todos los campos."
            });
            return;
        }

        $.ajax({
            url: "login",
            type: "POST",
            data: {
                nombre: nombre,
                password: password
            },
            success: function (respuesta) {
                if (respuesta === "OK") {

                    Swal.fire({
                        icon: "success",
                        title: "¡Bienvenido!",
                        text: "Inicio de sesión correcto.",
                        timer: 2000,
                        showConfirmButton: false
                    }).then(() => {
                        window.location.href = "Persona/Personahome.jsp";
                    });

                } else {

                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Nombre o contraseña incorrectos."
                    });

                }
            }
        });
    });
};