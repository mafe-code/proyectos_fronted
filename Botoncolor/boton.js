function cambiarColor() {
  var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("fondo").style.backgroundColor = color;
  document.getElementById("texto").innerText = color;
}