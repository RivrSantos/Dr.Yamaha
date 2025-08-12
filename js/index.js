document.addEventListener("DOMContentLoaded", function () {
  // Atualiza o ano no rodapé
const yearSpan = document.getElementById("current-year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

  // Lógica do Cabeçalho Dinâmico
const nav = document.getElementById("main-nav");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNavLinks = document.querySelector(".nav-links"); // Seleciona a lista de links para mobile

const onScroll = () => {
    // Adiciona fundo à navegação ao rolar
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

    // Destaca o link ativo na navegação
    let currentSection = "";
    sections.forEach((section) => {
    const sectionTop = section.offsetTop;
      // Ajuste o offset para que a seção seja ativada um pouco antes de atingir o topo da viewport
        if (pageYOffset >= sectionTop - nav.offsetHeight - 50) {
        // Considera a altura da nav
        currentSection = section.getAttribute("id");
    }
    });

    navLinks.forEach((link) => {
    link.classList.remove("active");
      // Verifica se o href do link contém o ID da seção atual
    if (
        link.getAttribute("href") &&
        link.getAttribute("href").includes(currentSection)
    ) {
        link.classList.add("active");
    }
    });
};

window.addEventListener("scroll", onScroll);

  // Lógica do Menu Hamburguer
if (menuToggle && mobileNavLinks) {
    menuToggle.addEventListener("click", function () {
    mobileNavLinks.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link (para dispositivos móveis)
    mobileNavLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        if (mobileNavLinks.classList.contains("active")) {
        mobileNavLinks.classList.remove("active");
        }
    });
    });
}
});

// funçao para doar
function copiarPix() {
  const chave = document.getElementById("chavePix").textContent;
  navigator.clipboard.writeText(chave).then(() => {
    document.getElementById("copiado").style.display = "block";
    setTimeout(() => {
      document.getElementById("copiado").style.display = "none";
    }, 3000);
  });
}

