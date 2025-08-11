document.addEventListener("DOMContentLoaded", () => {
    const inputCupom = document.getElementById("cupom");
    const btnVerificar = document.getElementById("verificar");
    const divResultado = document.getElementById("resultado");
    let cuponsData = [];

    // Carregar cupons do JSON
    fetch("../json/cupons.json")
        .then(res => res.json())
        .then(data => cuponsData = data);

    btnVerificar.addEventListener("click", () => {
        const codigo = inputCupom.value.trim().toUpperCase();
        if (!codigo) {
            divResultado.innerHTML = "<p style='color:red'>Digite um código de cupom.</p>";
            return;
        }

        const cupom = cuponsData.find(c => c.codigo === codigo);

        if (cupom) {
            divResultado.innerHTML = `
                <h2>Cupom Válido!</h2>
                <p><strong>${cupom.codigo}</strong> — ${cupom.descricao}</p>
                <p>Desconto: <b>${cupom.desconto}%</b></p>
                <a href="https://wa.me/5538988340443?text=Olá%20Dr.%20Yamaha!%20Tenho%20o%20cupom%20${cupom.codigo}%20(${cupom.desconto}%20off)." target="_blank" class="btn">Usar no WhatsApp</a>
            `;
        } else {
            divResultado.innerHTML = "<p style='color:red'>Cupom inválido ou expirado.</p>";
        }
    });
});