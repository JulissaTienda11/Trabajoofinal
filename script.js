function mostrarResultado(id) {
  document.querySelectorAll('div[id^="resultado"]').forEach(div => {
      div.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

function mostrarSiguiente(id) {
  document.querySelectorAll('div[id^="decision"]').forEach(div => {
      div.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}
