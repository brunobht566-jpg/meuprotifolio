// Aguarda o HTML ser carregado antes de acessar os elementos da página.
document.addEventListener("DOMContentLoaded", function () {
    // Busca os elementos usados para alternar entre a tela de login e o aplicativo.
    const loginButton = document.getElementById("loginButton");
    const loginScreen = document.getElementById("login-screen");
    const evoApp = document.getElementById("evo-app");

    // Configura o botão de entrada somente se os três elementos necessários existirem.
    if (loginButton && loginScreen && evoApp) {
        // Ao clicar, oculta a tela de login e mostra o aplicativo.
        loginButton.addEventListener("click", function () {
            loginScreen.classList.add("hidden");
            evoApp.classList.remove("hidden");
        });
    }

    // Localiza os itens de navegação e os painéis que eles controlam.
    const navItems = document.querySelectorAll(".nav-item[data-target]");
    const panels = document.querySelectorAll(".panel[data-view]");

    // Associa um comportamento de clique a cada item de navegação.
    navItems.forEach(function (button) {
        button.addEventListener("click", function () {
            // Lê o destino indicado pelo item clicado.
            const target = button.dataset.target;

            // Se o destino for sair, volta à tela de login e encerra este clique.
            if (target === "sair") {
                if (loginScreen) {
                    loginScreen.classList.remove("hidden");
                }
                if (evoApp) {
                    evoApp.classList.add("hidden");
                }
                return;
            }

            // Deixa ativo somente o item de navegação que foi clicado.
            navItems.forEach(function (item) {
                item.classList.toggle("active", item === button);
            });

            // Exibe o painel cujo identificador corresponde ao destino selecionado.
            panels.forEach(function (panel) {
                panel.classList.toggle("active", panel.dataset.view === target);
            });
        });
    });

    // Busca o botão ou elemento usado para voltar ao topo da página.
    const topo = document.getElementById("topo");
    if (topo) {
        // Mostra o elemento após rolar mais de 400 pixels e o oculta antes disso.
        window.addEventListener("scroll", function () {
            topo.style.display = window.scrollY > 400 ? "block" : "none";
        });
    }
});

// Remove a tela de entrada, revela o portfólio e leva a página à seção "Sobre".
function mostrarPortfolio() {
    // Localiza a tela inicial de entrada.
    const telaEntrada = document.getElementById("tela-entrada");

    // Remove a tela inicial do documento, se ela estiver presente.
    if (telaEntrada) {
        telaEntrada.remove();
    }

    // Localiza o conteúdo principal do site.
    const siteConteudo = document.getElementById("site-conteudo");
    // Torna o conteúdo visível removendo a classe que o oculta.
    if (siteConteudo) {
        siteConteudo.classList.remove("oculto");
    }

    // Localiza a seção para a qual a página deve ser direcionada.
    const sobre = document.getElementById("sobre");
    if (sobre) {
        // Rola até o início da seção sem animação.
        sobre.scrollIntoView({
            behavior: "auto",
            block: "start"
        });
    }
}

// Função chamada pelo botão de entrada; delega a exibição à função principal.
function entrarNoSite() {
    mostrarPortfolio();
}

// Abre diretamente o portfólio quando a URL contém ?pagina=portfolio.
if (new URLSearchParams(window.location.search).get("pagina") === "portfolio") {
    mostrarPortfolio();
}

// Alterna o estado aberto/fechado do menu de navegação.
function abrirMenu() {
    // Localiza o menu e altera sua classe de estado, se ele existir.
    const menu = document.getElementById("menu");
    if (menu) {
        menu.classList.toggle("ativo");
    }
}

// Fecha o menu de navegação removendo sua classe de estado ativo.
function fecharMenu() {
    // Localiza o menu e remove a classe que o mantém aberto.
    const menu = document.getElementById("menu");
    if (menu) {
        menu.classList.remove("ativo");
    }
}

// Rola a página suavemente até o topo.
function voltarTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Impede o envio tradicional do formulário e confirma o recebimento da mensagem.
function enviarFormulario(event) {
    // Evita que o navegador recarregue a página ao enviar o formulário.
    event.preventDefault();

    // Busca o campo que contém o nome informado.
    const nome = document.getElementById("nome");
    if (nome) {
        // Exibe uma saudação com o nome preenchido.
        alert("Olá, " + nome.value + "! Sua mensagem foi recebida.");
    }
}
