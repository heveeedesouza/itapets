document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector("form");
    const botaoEnviar = document.getElementById("btnEnviar");
    const botaoLimpar = document.getElementById("btnLimpar");

    if (botaoEnviar) {
        botaoEnviar.addEventListener("click", function (evento) {
            evento.preventDefault();

            Swal.fire({
                title: "Avaliação enviada! 🐾",
                text: "Obrigado por avaliar nossos produtos",
                icon: "success",
            }).then(() => {
                formulario.submit();
            });
        });
    }

    if (botaoLimpar) {
        botaoLimpar.addEventListener("click", function (evento) {
            evento.preventDefault();

            Swal.fire({
                title: "Tem certeza?",
                text: "Isso irá apagar todas as informações preenchidas.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sim, limpar",
                cancelButtonText: "Cancelar"
            }).then((resultado) => {
                if (resultado.isConfirmed) {
                    formulario.reset();
                    Swal.fire({
                        icon: "info",
                        title: "Formulário limpo!"
                    });
                }
            });
        });
    }
});
