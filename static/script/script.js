

  // Obtém o botão
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Mostra o botão quando o usuário rolar 100 pixels para baixo da parte superior da página
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
  
  // Rola suavemente para o topo quando o botão é clicado
  scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // Para navegadores da web
    document.documentElement.scrollTop = 0; // Para Internet Explorer, Edge e Firefox
  });
  

// script.js

// Adicione um atraso de 2 segundos (2000 milissegundos) antes de ocultar a tela de carregamento
setTimeout(function () {
    // Esconde a tela de carregamento
    document.querySelector('.loader').style.display = 'none';
    // Exibe o conteúdo principal
    document.querySelector('.content').style.display = 'block';
}, 1000); // 2000 milissegundos = 2 segundos




// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    // Verifica se o usuário já aceitou os cookies
    if (!localStorage.getItem('cookies_accepted')) {
        cookieConsent.style.display = 'block';
    }

    // Ao clicar no botão "Aceitar"
    acceptCookiesButton.addEventListener('click', function () {
        // Esconde a barra de consentimento
        cookieConsent.style.display = 'none';

        // Armazena o consentimento do usuário
        localStorage.setItem('cookies_accepted', 'true');
    });
});
