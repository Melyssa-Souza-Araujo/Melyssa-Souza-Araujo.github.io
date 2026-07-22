// Espera o documento carregar
document.addEventListener("DOMContentLoaded", () => {
    const btnAction = document.getElementById("btnAction");

    if (btnAction) {
        btnAction.addEventListener("click", () => {
            alert("🚀 Parabéns! Seu site no GitHub Pages está funcionando perfeitamente.");
        });
    }
});
