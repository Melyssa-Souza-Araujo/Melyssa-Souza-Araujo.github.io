<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Projeto no GitHub Pages</title>
    <link rel="stylesheet" href="style.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>

    <!-- Cabeçalho / Hero -->
    <header class="hero">
        <div class="container">
            <span class="badge">🚀 Meu Site no GitHub Pages</span>
            <h1>Bem-vindo ao Meu Projeto!</h1>
            <p>Este é um modelo de página web responsivo, moderno e pronto para ser hospedado gratuitamente no GitHub Pages.</p>
            <div class="hero-buttons">
                <button id="btnAction" class="btn primary">Clique Aqui</button>
                <a href="#recursos" class="btn secondary">Saiba Mais</a>
            </div>
        </div>
    </header>

    <!-- Seção de Recursos / Cards -->
    <section id="recursos" class="features">
        <div class="container">
            <h2>O que este projeto inclui?</h2>
            <div class="grid">
                <div class="card">
                    <div class="icon">💻</div>
                    <h3>Design Responsivo</h3>
                    <p>Adaptado perfeitamente para celulares, tablets e computadores de qualquer tamanho de tela.</p>
                </div>
                <div class="card">
                    <div class="icon">🎨</div>
                    <h3>Estilo Moderno</h3>
                    <p>Construído com CSS limpo, fontes personalizadas do Google Fonts e componentes estilizados.</p>
                </div>
                <div class="card">
                    <div class="icon">⚡</div>
                    <h3>Interatividade JS</h3>
                    <p>Ações em tempo real e manipulação do DOM prontas para expansão no arquivo script.js.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Rodapé -->
    <footer>
        <div class="container">
            <p>&copy; 2026 - Desenvolvido para o GitHub Pages | Criado por Você</p>
        </div>
    </footer>

    <script>
        // Espera o documento carregar
document.addEventListener("DOMContentLoaded", () => {
    const btnAction = document.getElementById("btnAction");

    if (btnAction) {
        btnAction.addEventListener("click", () => {
            alert("🚀 Parabéns! Seu site no GitHub Pages está funcionando perfeitamente.");
        });
    }
});
    </script>
</body>
</html>
