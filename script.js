async function atualizarPreco() {
  const resposta = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl');
  const dados = await resposta.json();
  document.getElementById('preco-btc').innerText = `R$ ${dados.bitcoin.brl}`;
}

setInterval(atualizarPreco, 60000);
atualizarPreco();

function calcularBTC() {
  const precoBTC = parseFloat(document.getElementById('preco-btc').innerText.replace('R$', '').replace(',', '.')) || 0;
  const valorInvestido = document.getElementById('valor').value;
  const resultado = valorInvestido / precoBTC;
  document.getElementById('resultado').innerText = `Você compraria ${resultado.toFixed(8)} BTC`;
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}