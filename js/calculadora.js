function calcular() {
    const consumo = parseFloat(document.getElementById("consumo").value);
    const distancia = parseFloat(document.getElementById("distancia").value);
    const preco = parseFloat(document.getElementById("preco").value);
    const revisao = parseFloat(document.getElementById("revisao").value);
    const imposto = parseFloat(document.getElementById("imposto").value);
    const anos = parseInt(document.getElementById("anos").value);

    if (
        isNaN(consumo) ||
        isNaN(distancia) ||
        isNaN(preco) ||
        isNaN(revisao) ||
        isNaN(imposto) ||
        isNaN(anos)
    ) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    const litrosMes = distancia / consumo;
    const custoCombustivelMes = litrosMes * preco;
    const custoCombustivelAno = custoCombustivelMes * 12;
    const totalCombustivel = custoCombustivelAno * anos;
    const totalRevisao = revisao * anos;
    const totalImposto = imposto * anos;
    const total = totalCombustivel + totalRevisao + totalImposto;

    document.getElementById(
        "combustivel"
    ).innerText = `Total com combustível: R$ ${totalCombustivel.toFixed(2)}`;
    document.getElementById(
        "revisoes"
    ).innerText = `Total com revisões: R$ ${totalRevisao.toFixed(2)}`;
    document.getElementById(
        "impostos"
    ).innerText = `Total com impostos: R$ ${totalImposto.toFixed(2)}`;
    document.getElementById(
        "total"
    ).innerText = `Custo total estimado: R$ ${total.toFixed(2)}`;

    document.getElementById("resultado").style.display = "block";
    }
