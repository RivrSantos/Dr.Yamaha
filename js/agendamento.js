const form = document.getElementById("agendamento-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const tipo = document.getElementById("tipo").value;

    const numeroWhatsApp = "5538988340443"; // Dr. Yamaha
    const mensagem = `Olá Dr. Yamaha! Gostaria de agendar uma consultoria.\n\n🧍 Nome: ${nome}\n📱 WhatsApp: ${telefone}\n📅 Data: ${data}\n🕒 Horário: ${hora}\n🛠️ Tipo: ${tipo}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
});
