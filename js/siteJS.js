document.addEventListener("DOMContentLoaded", () => {
    AOS.init();

    tippy('[data-tippy-content]');

    const campoBusca = document.getElementById("searchInput");
    const artigos = document.querySelectorAll("main article");

    if (campoBusca) {
        campoBusca.addEventListener("input", () => {
            const texto = campoBusca.value.toLowerCase();
            artigos.forEach(artigo => {
                const produto = artigo.innerText.toLowerCase();
                artigo.style.display = produto.includes(texto) ? "block" : "none";
            });
        });
    }
});


