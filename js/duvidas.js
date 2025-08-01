const perguntas = document.querySelectorAll('.faq-question');
perguntas.forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');
  });
});
function enviarParaWhatsApp(event) {
  event.preventDefault();
  const textarea = document.getElementById('duvida');
  const texto = textarea.value.trim();
  if (texto === '') return;

  const numeroWhatsApp = '5538988340443'; // seu número 
  const mensagem = encodeURIComponent(`Olá Dr. Yamaha! Tenho a seguinte dúvida:\n\n"${texto}"`);
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

  window.open(url, '_blank'); // Abre WhatsApp
  textarea.value = '';
}
