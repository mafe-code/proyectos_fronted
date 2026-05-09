

function toHex(n) {
  return n.toString(16).padStart(2, '0');
}


function actualizar() {
  var r = Number(document.getElementById('r').value);
  var g = Number(document.getElementById('g').value);
  var b = Number(document.getElementById('b').value);

  
  document.getElementById('numR').textContent = r;
  document.getElementById('numG').textContent = g;
  document.getElementById('numB').textContent = b;

  
  document.getElementById('fondo').style.background = 'rgb(' + r + ',' + g + ',' + b + ')';

  // Mostramos el código 
  document.getElementById('hexVal').textContent = '#' + toHex(r) + toHex(g) + toHex(b);
}

document.getElementById('r').addEventListener('input', actualizar);
document.getElementById('g').addEventListener('input', actualizar);
document.getElementById('b').addEventListener('input', actualizar);

// Ejecutar
actualizar();