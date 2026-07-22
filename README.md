<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Projeto no GitHub Pages</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        /* Reset Básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: #0f172a;
    color: #f8fafc;
    line-height: 1.6;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Hero Section */
.hero {
    padding: 100px 0;
    text-align: center;
    background: radial-gradient(circle at top, #1e293b, #0f172a);
}

.badge {
    background-color: rgba(56, 189, 248, 0.1);
    color: #38bdf8;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid rgba(56, 189, 248, 0.2);
    display: inline-block;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #ffffff;
}

.hero p {
    font-size: 1.25rem;
    color: #94a3b8;
    max-width: 600px;
    margin: 0 auto 30px auto;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
}

/* Botões */
.btn {
    display: inline-block;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    font-size: 1rem;
}

.btn.primary {
    background-color: #0284c7;
    color: #ffffff;
}

.btn.primary:hover {
    background-color: #0369a1;
    transform: translateY(-2px);
}

.btn.secondary {
    background-color: transparent;
    color: #cbd5e1;
    border: 1px solid #334155;
}

.btn.secondary:hover {
    background-color: #1e293b;
    color: #ffffff;
}

/* Seção de Recursos (Cards) */
.features {
    padding: 80px 0;
    background-color: #0f172a;
}

.features h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 50px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.card {
    background-color: #1e293b;
    padding: 30px;
    border-radius: 12px;
    border: 1px solid #334155;
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    border-color: #0284c7;
}

.card .icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.card h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #f1f5f9;
}

.card p {
    color: #94a3b8;
    font-size: 0.95rem;
}

/* Footer */
footer {
    text-align: center;
    padding: 30px 0;
    border-top: 1px solid #1e293b;
    color: #64748b;
    font-size: 0.9rem;
}
    </style>
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
