document.addEventListener("DOMContentLoaded", () => {
    const selectModelo = document.getElementById("modelo");
    const inputAno = document.getElementById("ano");
    const inputKm = document.getElementById("km");
    const btnCalcular = document.getElementById("calcular");
    const divResultado = document.getElementById("resultado");

    let modelosData = [];

    // Carregar modelos do JSON
    fetch("../json/modelos.json")
        .then(res => res.json())
        .then(data => {
            modelosData = data;
            data.forEach(m => {
                const opt = document.createElement("option");
                opt.value = m.modelo;
                opt.textContent = m.modelo;
                selectModelo.appendChild(opt);
            });
        });

    btnCalcular.addEventListener("click", () => {
        const modeloSelecionado = selectModelo.value;
        const ano = parseInt(inputAno.value);
        const kmAtual = parseInt(inputKm.value);

        if (!modeloSelecionado || !ano || !kmAtual) {
            divResultado.innerHTML = "<p style='color:red'>Preencha todos os campos!</p>";
            return;
        }

        const modeloData = modelosData.find(m => m.modelo === modeloSelecionado);
        if (!modeloData) return;

        let html = `<h2>Revisões para ${modeloSelecionado}</h2>`;
        let total = 0;

        modeloData.revisoes.forEach(r => {
            if (kmAtual >= r.km) {
                html += `<p><strong>${r.km} km</strong>: ${r.descricao} — <b>R$ ${r.custo}</b> (Realizada ou em atraso)</p>`;
                total += r.custo;
            } else if (kmAtual + 1000 >= r.km) {
                html += `<p><strong>${r.km} km</strong>: ${r.descricao} — <b>R$ ${r.custo}</b> (Próxima revisão)</p>`;
            }
        });

        html += `<h3>Total estimado de manutenções vencidas: R$ ${total}</h3>`;
        html += `<a href="https://wa.me/5538988340443?text=Olá%20Dr.%20Yamaha!%20Quero%20agendar%20uma%20revisão%20para%20${modeloSelecionado}." target="_blank" class="btn">Agendar no WhatsApp</a>`;
        
        divResultado.innerHTML = html;
    });
});
